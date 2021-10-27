let left = document.querySelector('.arrow.left');
let right = document.querySelector('.arrow.right');
let year = document.querySelector('.year');

function minus() {
    let num = parseInt(year.textContent)
    num--;
    year.textContent = num; 
}

function plus() {
    let num = parseInt(year.textContent)
    num++;
    year.textContent = num; 
}


