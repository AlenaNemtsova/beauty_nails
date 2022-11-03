const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const dateString = today.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
}); //тут мы локализовали отображение даты
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let todayDayofWeek = weekdays.indexOf(dateString.split(', ')[0]); // номер дня на недели
Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
let dayInMonth = today.daysInMonth(); // количество дней в месяце
let firstDayOfWeek = new Date(year, month, day - todayDayofWeek);
let lastDayOfWeek = new Date(year, month, day + 6 - todayDayofWeek);

let dayOnWeek = [];
let newDayOfWeek = firstDayOfWeek.getDate();
for (i = 0; i < 7; i++) {
    if (newDayOfWeek != dayInMonth) {
        newDayOfWeek = new Date(year, month - 1, firstDayOfWeek.getDate() + i);
    } else {
        newDayOfWeek = new Date(year, month + 1, i - lastDayOfWeek.getDate())
    }
    let dayInLabel = newDayOfWeek.toLocaleDateString('en-GB', {
        month: 'numeric',
        day: 'numeric',
    });
    dayOnWeek.push(dayInLabel);
    newDayOfWeek = newDayOfWeek.getDate();
}

let labelbox = document.querySelectorAll('.label');
let radiobox = document.querySelectorAll('.selection');
let n = 0;
let j = 0;
labelbox.forEach(item => {
    let dateInMass = dayOnWeek[n].slice(0, 2);
    if (dateInMass == today.getDate()) {
        item.classList.add('today_style');
    }
    item.textContent += dayOnWeek[n];
    n++;
});

radiobox.forEach(item => {
    let dateInMass = dayOnWeek[j].slice(0, 2);
    if (dateInMass == today.getDate()) {
        item.classList.add('today_style');
    }
    item.value = dayOnWeek[j];
    j++;
})