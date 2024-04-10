//F=k+ [(13*m-1)/5] +D+ [D/4] +[C/4]-2*C
//K = day of the month
//M = month number
//D = last 2 digits of the year
//C = first 2 digits of the year

var months = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"];
var daysInMonth = [31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28];
var m = 11;
var year = 2023;

function getStart(e)  {
    let k = 1;
    let d = (year % 100);
    let c = parseInt(year / 100);
    if(m == 12 || m == 11) {
        d--;
    }
    console.log(d);

    let start = parseInt(k+ parseInt((13*m-1)/5) +d+ parseInt(d/4) +parseInt(c/4)-2*c) % 7;
    if(start < 0) {
        // let remainder = parseInt(start / -7) * -7;
        // let difference = (start - remainder);
        start = start + 7;
    }

    return start;
}

function getDate() {
    let date = new Date();
    let month = date.getMonth() + 1;
    month -= 2;
    if(month <= 0) {
        month += 12;
    }
    m = month;
    year = date.getFullYear();
}

function loadDates() {
    // let calender = document.getElementById("calender");
    document.getElementById("calender").innerHTML = "";
    document.getElementById("month").innerHTML = months[m - 1] + " " + year;
    let start = getStart();
    console.log(start);

    for(let i = 0; i < start; i++) {
        let data = document.createElement("div");
        data.setAttribute("id", "blank");
        document.getElementById("calender").appendChild(data);
    }

    let days = daysInMonth[m - 1];
    if(m == 12) {
        if(year % 4 == 0) {
            days++;
        }
    }

    for(let i = 1; i <= days; i++) { 
        // calender.appendChild();
        let data = document.createElement("div");
        data.setAttribute("id", i);
        data.setAttribute("class", "date");
        data.innerHTML = i;
        let month = document.getElementById("month").innerHTML
        console.log(month);
        data.setAttribute("onClick", "goToDay(" + i + ",\"" + month + "\")");
        document.getElementById("calender").appendChild(data);
    }
    // document.appendChild(calender);
}

function nextMonth() {
    if(m == 10) {
        m++;
        year++;
    } else if(m == 12) {
        m = 1;
    } else {
        m++;
    }
    loadDates();
}

function prevMonth() {
    if(m == 1) {
        m = 12;
    } else if(m == 11) {
        m--;
        year--;
    } else {
        m--;
    }
    loadDates();
}


function goToDay(day, month) {
    window.location.href = "Calender.html?day=" + day + "&month=" + month;
}


getDate();
loadDates();