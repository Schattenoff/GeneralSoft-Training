function MyArray(array) {
    this.array = array;
}

MyArray.prototype.first = function() {
    return this.array[0];
}

MyArray.prototype.last = function() {
    return this.array[this.array.length-1];
}

MyArray.prototype.skip = function(index) {
    let result = [];
    for(let i = 0; i < this.array.length; i++) {
        if (i >= index) {
            result[i - index] = this.array[i];
        }
    }
    return new MyArray(result);
}


MyArray.prototype.take = function(index) {
    let result = [];
    for(let i = 0; i < index; i++) {
        result[i] = this.array[i];
    }
    return new MyArray(result);
}

MyArray.prototype.map = function(fn) {
    let result = [];
    result = this.array.map(fn);
    return result;
}

MyArray.prototype.filter = function(fn) {
    let result = [];
    result = this.array.filter(fn);
    return result;
}

var arr = new MyArray([3, 5, 2, 4, 1]);
console.log(arr.first());
console.log(arr.last());
console.log(arr.skip(2).array);
console.log(arr.take(2).array);
console.log(arr.take(4).skip(3));
console.log(arr.take(4).skip(2).first());
console.log(arr.map(function(item) {
    return item * item;
}));
console.log(arr.filter(function(item) {
    return item % 2;
}))