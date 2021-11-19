class Calendar {
    constructor() {

    }
    dateNow() {
        let dt = new Date();
        return dt;
    }
    selectMonth() {
        let selectMonth = document.getElementById('select-month');
        selectMonth.selectedIndex = this.dateNow().getMonth();
    }
    changeMonth() {
        let selectMonth = document.getElementById('select-month');
        this.dateNow().setMonth(selectMonth.options[selectMonth.selectedIndex].value);
        this.renderCalendar();
    }
    DayOfTheWeek() {
        let dayIndex = 0;
        const firstDayIndex = this.dateNow().getDay();
        for(let i = 0; i <= firstDayIndex; i++) {
            if (firstDayIndex == 0) {
                dayIndex = 7; 
            }
            else dayIndex = firstDayIndex;
        }
    }
    prevDate() {
        const prevLastDay = new Date(this.dateNow().getFullYear(), this.dateNow().getMonth(), 0).getDate(); 
        for(let i = this.DayOfTheWeek()-1; i > 0; i--) {
            days += `<div class="calendar-box prevDate">${prevLastDay - i +1}</div>`;
        }
    }
    daysMonth() {
        const monthDays = document.getElementById('calendar');
        const month = this.dateNow().getMonth(0);
        const year = this.dateNow().getFullYear();
        let days = "";
        const lastDay = new Date(this.dateNow().getFullYear(), this.dateNow().getMonth() + 1, 0).getDate();
        for (let i = 1; i <= lastDay; i++) {
            if (i === new Date().getDate() && this.dateNow().getMonth() === new Date().getMonth() && this.dateNow().getFullYear() === new Date().getFullYear()) {
                days += `<div class="calendar-box today" onclick="openModal(${i},${month+1},${year});">${i}</div>`
            } else {
                days += `<div class="calendar-box" onclick="openModal(${i},${month+1},${year});">${i}</div>`;
                monthDays.innerHTML = days;
            } 
        }
    }
    displayYear() {
        const year = this.dateNow().getFullYear();
        let displayYear = document.querySelector('.year');
        displayYear.innerHTML = year;
    }
    renderCalendar() {
        this.dateNow();
        this.displayYear();
        this.selectMonth();
        this.prevDate();
        this.daysMonth();
    }

}

let calendar = new Calendar();

calendar.renderCalendar();