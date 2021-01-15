const date = new Date();

const renderCalendar = () =>{
    date.setDate(1);
console.log(date.getDay());

const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
console.log(lastDay);

const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

const nextDays = 7-lastDayIndex-1;

const firstDayIndex = date.getDay();

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
document.querySelector(".date p").innerHTML = new Date().toDateString();

const monthDays = document.querySelector(".days");

let days = "";

for( let x = firstDayIndex; x > 0; x--){
    days+= `<div class="prev-date">${prevLastDay - x + 1}</div>` 
}

for (let i = 1; i <= lastDay; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
      days += `<div id="${i}" onclick="myFunction()" class="today">${i}</div>`;
    } else {
      days += `<div id="${i}">${i}</div>`;
    }
  }

for(var j = 1; j <= nextDays; j++){
    days+= `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
}

}
// date.setMonth(5);

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });
  
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
  
  renderCalendar();

function myFunction(){
  console.log("hi");
  var txt;
  var person = prompt("Enter a task:", "");
  if (person == null || person == "") {
    txt = "No task.";
  } else {
    txt = person;
    console.log(txt);
    var node = document.createElement("div");
    console.log(node);
    var textnode = document.createTextNode(txt);
    console.log(node);
    
    node.appendChild(textnode);
    document.getElementById("tasks").appendChild(node);

    // txt = `<div>${person}</div>`
    document.getElementById("list").style.display = "block";
    // txt =  person ;
  }
  demo = document.querySelector("#tasks");
  demo.innerHTML = txt;

  // document.getElementById("tasks").innerHTML = txt;

}
  