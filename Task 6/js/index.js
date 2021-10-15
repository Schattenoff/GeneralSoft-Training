function MyArray(array) {
    return {
        first: function() {
            return  array[0]
        },
        last: function() {
            return array[array.length-1]
        },
        skip: function(num) {
            return array.slice(2, num);
        },
        take: function(num) {
            return array.slice(0, num);
        },
    }
}

var arr = new MyArray([3, 5, 2, 4, 1]);

console.log(arr.first());
console.log(arr.last());
console.log(arr.skip(5));
console.log(arr.take(2));