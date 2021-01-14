const date = new Date();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

console.log(date.getMonth());
document.querySelector(".date h1").innerHTML = months[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();

const monthDays = document.querySelector(".days");

let days = "";

for( var i = 1; i <= 31; i++){
    days+= `<div>${i}</div>`;
    monthDays.innerHTML = days;
}
