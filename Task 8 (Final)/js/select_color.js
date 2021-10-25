let box = document.getElementsByClassName("calendar-box");
colorBlue();

function removeClassColor() {

    //delete blue color
    document.querySelector('.nav').classList.remove("blue");
        for (let i = 0; i < box.length; i++) {
            box[i].classList.remove("blue");
        }
    document.querySelector('.add_events').classList.remove("blue");

    //delete black color
    document.querySelector('.nav').classList.remove("black");
        for (let i = 0; i < box.length; i++) {
            box[i].classList.remove("black");
        }
    document.querySelector('.add_events').classList.remove("black");

    //delete yellow color
    document.querySelector('.nav').classList.remove("yellow");
        for (let i = 0; i < box.length; i++) {
            box[i].classList.remove("yellow");
        }
    document.querySelector('.add_events').classList.remove("yellow");

}

function colorBlue() {
    document.querySelector('.nav').classList.add("blue");
        for (let i = 0; i < box.length; i++) {
            box[i].classList.add("blue");
        }
    document.querySelector('.add_events').classList.add("blue");
}

function colorBlack() {
    document.querySelector('.nav').classList.add("black");
        for (let i = 0; i < box.length; i++) {
            box[i].classList.add("black");
        }
    document.querySelector('.add_events').classList.add("black");
}

function colorYellow() {
    document.querySelector('.nav').classList.add("yellow");
        for (let i = 0; i < box.length; i++) {
            box[i].classList.add("yellow");
        }
    document.querySelector('.add_events').classList.add("yellow");
}

function update() {
    let select = document.getElementById('select-color');
    let value = select.options[select.selectedIndex].value;
    if (value == 'Blue') {
        removeClassColor();
        colorBlue();
    } 
    else if (value == 'Black') {
        removeClassColor();
        colorBlack();
    }
    else if (value == 'Yellow') {
        removeClassColor();
        colorYellow();
    }
    else colorBlue();
}

