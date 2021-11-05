let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const monthDays = document.getElementById('calendar');
let select = document.getElementById('select-month');

const dt = new Date();

const renderCalendar = () => {
    select.selectedIndex = dt.getMonth();
  
    dt.setDate(1);
    
    const year = dt.getFullYear();
    
    const lastDay = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
    
    const firstDayIndex = dt.getDay();
    const lastDayIndex = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex;
    let displayYear = document.querySelector('.year');
    displayYear.innerHTML = year;
    
    let days = "";

    let dayIndex = 0;
    for (let t = 0; t <= firstDayIndex; t++) {
        if (firstDayIndex == 0) {
            dayIndex = 7;
        }
        else dayIndex = firstDayIndex;
    }
    for (let x = dayIndex-1; x > 0; x--) {
        days += `<div class="calendar-box prevDate">${prevLastDay - x +1}</div>`;
    }
    
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && dt.getMonth() === new Date().getMonth() && dt.getFullYear() === new Date().getFullYear()) {
            days += `<div class="calendar-box today" onclick="test1();">${i}</div>`
        } else {
            days += `<div class="calendar-box" onclick="test1();">${i}</div>`;
        } 
    }
    
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="calendar-box nextDate">${j}</div>`;
        monthDays.innerHTML = days;
    }
}


function change() {
    dt.setMonth(select.options[select.selectedIndex].value);
    renderCalendar();
}

document.querySelector('.left').addEventListener('click', () => {
    dt.setFullYear(dt.getFullYear() - 1)
    renderCalendar();
})

document.querySelector('.right').addEventListener('click', () => {
    dt.setFullYear(dt.getFullYear() + 1)
    renderCalendar();
})

renderCalendar();


let name = document.querySelector('.name');
let database = new Database();
name.innerHTML =`Name: ${(database.onGetUserName(database.onGetUserID()))}`;



