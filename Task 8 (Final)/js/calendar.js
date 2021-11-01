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
        let day = document.getElementsByClassName('calendar-box');
        if (i === new Date().getDate() && dt.getMonth() === new Date().getMonth() && dt.getFullYear() === new Date().getFullYear()) {
            days += `<div class="calendar-box today">${i}</div>`
        } else {
            days += `<div class="calendar-box">${i}</div>`;
            day.textContent = 2;
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

helper.disableBack();   

function logout() {
    helper.message(true, "Ok! Logout!");
}


let name = document.querySelector('.name');
let users = JSON.parse(localStorage.getItem('users'));
let id = JSON.parse(localStorage.getItem('id'));
name.textContent = `Name: ${users[id].userName}`









