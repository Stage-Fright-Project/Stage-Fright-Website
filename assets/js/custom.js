/*--------------------------------------------------------------
# Init
--------------------------------------------------------------*/

// function addClass(objs, cls) {
//     array.forEach(objs => {
//         objs.classList.add(cls);
//     });
// }

// addClass(document.getElementsByClassName("countdown-number-f"), countdown-number);

function hide(obj) {
    obj.classList.add("hidden");
}

function unhide(obj) {
    obj.classList.remove("hidden");
}

/*--------------------------------------------------------------
# Summer Tour Countdown
--------------------------------------------------------------*/

let second = Math.max(5, Math.max(Math.round(Math.random() * 30), Math.round(Math.random() * 59)));
let minute = Math.max(5, Math.max(Math.round(Math.random() * 45), Math.round(Math.random() * 59)));
let hour = Math.max(5, Math.max(Math.round(Math.random() * 30), Math.round(Math.random() * 59)));
let day = Math.max(143, Math.max(Math.round(Math.random() * 70), Math.round(Math.random() * 200)));

let secobj = document.getElementById("second");
let minobj = document.getElementById("minute");
let hourobj = document.getElementById("hour");
let dayobj = document.getElementById("day");

secobj.innerHTML = second;
minobj.innerHTML = minute;
hourobj.innerHTML = hour;
dayobj.innerHTML = day;

function lower() {
    if (second != 0) {
        second -= 1;

        secobj.innerHTML = second;
    } else if (minute != 0) {
        second = 59;
        minute -= 1;

        secobj.innerHTML = second;
        minobj.innerHTML = minute;
    } else {
        second = 59;
        minute = 59;
        hour -= 1;
    }
}

setInterval(lower, 1000);

/*--------------------------------------------------------------
# Summer Tour Tickets Sold
--------------------------------------------------------------*/

// Constants

let maximumTickets = 4000;

let firstTickInt = 1000;
let secondTickInt = 750;

// -----------

let ticketsSold = Math.max(957, Math.max(Math.round(Math.random() * 999), Math.round(Math.random() * maximumTickets)));

let tickobj = document.getElementById("tickets");
let maxtickobj = document.getElementById("maximum-tickets");

let buttonobj = document.getElementById("purchase-ticket");
let palobj = document.getElementById("pal-ticket");

tickobj.innerHTML = ticketsSold;
maxtickobj.innerHTML = "/ " + maximumTickets;

function updateTickets(max) {
    ticketsSold += Math.max(1, Math.max(Math.round(Math.random() * 3), Math.round(Math.random() * max)));

    if (ticketsSold <= maximumTickets) {
        tickobj.innerHTML = ticketsSold;
    } else {
        tickobj.innerHTML = "Sold Out";
        tickobj.classList.add("sold-out");
        hide(maxtickobj);
        hide(buttonobj);
        unhide(palobj);
        
        // maxtickobj.innerHTML = "See you again next year!"
    }
}

setInterval(function () {updateTickets(40)}, firstTickInt);
setInterval(function () {updateTickets(10)}, secondTickInt);
