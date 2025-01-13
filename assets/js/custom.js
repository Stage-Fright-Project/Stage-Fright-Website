
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

function remToPx(num) {
    return num * 16;
}

function disable(obj, name) {
    obj.classList.add("disabled");
    obj.classList.add(name + "-disabled");
}

function enable(obj, name) {
    obj.classList.remove("disabled");
    obj.classList.remove(name + "-disabled");
}

function highlight(obj, name) {
    obj.classList.add("highlighted");
    obj.classList.add(name + "-highlighted");
}

function unhighlight(obj, name) {
    obj.classList.remove("highlighted");
    obj.classList.remove(name + "-highlighted");
}



/*--------------------------------------------------------------
# Discovery
--------------------------------------------------------------*/

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const discList = document.getElementsByClassName("disc-li");
const discName = document.getElementById('discName');
const discDesc = document.getElementById('discDesc');

const scrollStep = remToPx(16.5);

const boxWidth = remToPx(15);
const gapWidth = remToPx(1.5);

// let date = new Date();
// let seconds = now.getSeconds();
// let start = 0;
let stop = false;

let discIndex = 0;
const maxDiscIndex = 5;

const discListNames =
[
    "Wanderer's Sky",
    "Whispers in the Pines",
    "Beneath the Blackwater Sky",
    "Item 4",
    "Item 5",
    "Item 6"
]

const discListDesc =
[
    "Item 1 Desc",
    "Item 2 Desc",
    "Item 3 Desc",
    "Item 4 Desc",
    "Item 5 Desc",
    "Item 6 Desc"
]

disable(buttonLeft, "disc-btn");
highlight(discList[0], "disc-li");
discName.innerHTML = discListNames[0];
discDesc.innerHTML = discListDesc[0];

buttonRight.onclick = function () {
    if (discIndex < maxDiscIndex && discIndex != maxDiscIndex - 1) {
        document.getElementById('disc-box').scrollTo({
            left: boxWidth * (discIndex + 1),
            behavior: 'smooth'
        });
        enable(buttonRight, "disc-btn");
        enable(buttonLeft, "disc-btn");
        discIndex++;
    } else if (discIndex == maxDiscIndex - 1) {
        document.getElementById('disc-box').scrollTo({
            left: boxWidth * (discIndex + 1),
            behavior: 'smooth'
        });
        discIndex++;
        disable(buttonRight, "disc-btn");
    } else {
        disable(buttonRight, "disc-btn");
    }

    highlight(discList[discIndex], "disc-li");
    unhighlight(discList[discIndex - 1], "disc-li");

    discName.innerHTML = discListNames[discIndex];
    discDesc.innerHTML = discListDesc[discIndex];

    stop = true;
  };

  buttonLeft.onclick = function () {
    if (discIndex > 0 && discIndex != 1) {
        document.getElementById('disc-box').scrollTo({
            left: boxWidth * (discIndex - 1),
            behavior: 'smooth'
        });
        enable(buttonLeft, "disc-btn");
        enable(buttonRight, "disc-btn");
        discIndex--;
    } else if (discIndex = 1) {
        document.getElementById('disc-box').scrollTo({
            left: boxWidth * (discIndex - 1),
            behavior: 'smooth'
        });
        discIndex--;
        disable(buttonLeft, "disc-btn");
    } else {
        disable(buttonLeft, "disc-btn");
    }

    highlight(discList[discIndex], "disc-li");
    unhighlight(discList[discIndex + 1], "disc-li");

    discName.innerHTML = discListNames[discIndex];
    discDesc.innerHTML = discListDesc[discIndex];

    stop = true;
  };

  function flip() {
    // seconds = date.getSeconds();

    if (!stop) { 
    if (discIndex < maxDiscIndex && discIndex != maxDiscIndex - 1) {
        document.getElementById('disc-box').scrollTo({
            left: boxWidth * (discIndex + 1),
            behavior: 'smooth'
        });
        enable(buttonRight, "disc-btn");
        enable(buttonLeft, "disc-btn");
        discIndex++;
    } else if (discIndex == maxDiscIndex - 1) {
        document.getElementById('disc-box').scrollTo({
            left: boxWidth * (discIndex + 1),
            behavior: 'smooth'
        });
        discIndex++;
        disable(buttonRight, "disc-btn");
    } else {
        document.getElementById('disc-box').scrollTo({
            left: 0,
            behavior: 'smooth'
        });
        enable(buttonRight, "disc-btn");
        disable(buttonLeft, "disc-btn");
        unhighlight(discList[maxDiscIndex], "disc-li");
        discIndex = 0;
    }

    highlight(discList[discIndex], "disc-li");
    unhighlight(discList[discIndex - 1], "disc-li");

    discName.innerHTML = discListNames[discIndex];
    discDesc.innerHTML = discListDesc[discIndex];
    }
  }

  setInterval(flip, 7500);


/*--------------------------------------------------------------
# Summer Tour Countdown
--------------------------------------------------------------*/

let second = Math.max(5, Math.max(Math.round(Math.random() * 30), Math.round(Math.random() * 59)));
let minute = Math.max(5, Math.max(Math.round(Math.random() * 45), Math.round(Math.random() * 59)));
let hour = Math.max(5, Math.max(Math.round(Math.random() * 6), Math.round(Math.random() * 23)));
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

        secobj.innerHTML = second;
        minobj.innerHTML = minute;
        hourobj.innerHTML = hour;
    }
}
setInterval(lower, 1000);

// /*--------------------------------------------------------------
// # Summer Tour Tickets Sold
// --------------------------------------------------------------*/

// // Constants

// let maximumTickets = 4000;

// let firstTickInt = 1000;
// let secondTickInt = 750;

// // -----------

// let ticketsSold = Math.max(957, Math.max(Math.round(Math.random() * 999), Math.round(Math.random() * maximumTickets)));

// let tickobj = document.getElementById("tickets");
// let maxtickobj = document.getElementById("maximum-tickets");

// let buttonobj = document.getElementById("purchase-ticket");
// let palobj = document.getElementById("pal-ticket");

// tickobj.innerHTML = ticketsSold;
// maxtickobj.innerHTML = "/ " + maximumTickets;

// function updateTickets(max) {
//     ticketsSold += Math.max(1, Math.max(Math.round(Math.random() * 3), Math.round(Math.random() * max)));

//     if (ticketsSold <= maximumTickets) {
//         tickobj.innerHTML = ticketsSold;
//     } else {
//         tickobj.innerHTML = "Sold Out";
//         tickobj.classList.add("sold-out");
//         hide(maxtickobj);
//         hide(buttonobj);
//         unhide(palobj);
        
//         // maxtickobj.innerHTML = "See you again next year!"
//     }
// }

// setInterval(function () {updateTickets(40)}, firstTickInt);
// setInterval(function () {updateTickets(10)}, secondTickInt);

/*--------------------------------------------------------------
# Summer Tour Tickets Sold
--------------------------------------------------------------*/
const allLoc =
[
    laLoc =
    [
        laLat = 34.052235,
        laLon = -118.243682
    ],
    saLoc =
    [
        saLat = 37.774929,
        saLon = -122.419418
    ],
    phLoc =
    [
        phLat = 33.448376,
        phLon = -112.074036
    ],
    hLoc =
    [
        hLat = 29.760427,
        hLon = -95.369804
    ],
    dLoc =
    [
        dLat = 32.776665,
        dLon = -96.796989
    ],
    noLoc =
    [
        noLat = 29.951763,
        noLon = -90.074617
    ],
    mLoc =
    [
        mLat = 25.761681,
        mLon = -80.191788
    ],
    nLoc =
    [
        nLat = 36.162663,
        nLon = -86.781601
    ],
    cLoc =
    [
        cLat = 41.878113,
        cLon = -87.629799
    ],
    pitLoc =
    [
        pitLat = 40.440624,
        pitLon = -79.995888
    ],
    newLoc =
    [
        newLat = 40.731510,
        newLon = -74.174393
    ],
    nycLoc =
    [
        nycLat = 40.712776,
        nycLon = -74.005974
    ]
]

let allDist =
[
    laDist,
    saDist,
    phDist,
    hPDist,
    dPDist,
    noDist,
    mPDist,
    nDist,
    cDist,
    pitDist,
    newDist,
    nycDist
]

let allPop =
[
    laPop,
    saPop,
    phPop,
    hPop,
    dPop,
    noPop,
    mPop,
    nPop,
    cPop,
    pitPop,
    newPop,
    nycPop
]

let allMax =
[
    laMax,
    saMax,
    phMax,
    hMax,
    dMax,
    noMax,
    mMax,
    nMax,
    cMax,
    pitMax,
    newMax,
    nycMax
]

let allSpeed =
[
    laSpeed,
    saSpeed,
    phSpeed,
    hSpeed,
    dSpeed,
    noSpeed,
    mSpeed,
    nSpeed,
    cSpeed,
    pitSpeed,
    newSpeed,
    nycSpeed
]

let allStart = 
[
    laStart,
    saStart,
    phStart,
    hStart,
    dStart,
    noStart,
    mStart,
    nStart,
    cStart,
    pitStart,
    newStart,
    nycStart
]

let allNow = 
[
    laNow,
    saNow,
    phNow,
    hNow,
    dNow,
    noNow,
    mNow,
    nNow,
    cNow,
    pitNow,
    newNow,
    nycNow
]

let allSold =
[
    laSold = false,
    saSold = false,
    phSold = false,
    hSold = false,
    dSold = false,
    noSold = false,
    mSold = false,
    nSold = false,
    cSold = false,
    pitSold = true,
    newSold = false,
    nycSold = false
]

const tickobj = document.getElementById("tickets");
const maxtickobj = document.getElementById("maximum-tickets");

const buttonobj = document.getElementById("purchase-ticket");
const dropobj = document.getElementById("location-selector");
const palobj = document.getElementById("pal-ticket");

function InitTicketsOnce() {
    const R = 6371;
    let myLoc =
    [
        myLat,
        myLon
    ]

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                myLoc[0] = position.coords.latitude;
                myLoc[1] = position.coords.longitude;

                    // while (myLoc[0] == null && myLoc[1] == null) {}

                console.log("User position found to be " + myLoc[0] + " " + myLoc[1]);
            },
        
            (error) => {
                myLoc[0] = 36.025492;
                myLoc[1] = -95.970157;
            }
        );
    } else {
        myLoc[0] = 36.025492;
        myLoc[1] = -95.970157;
    }


    allLoc.forEach((location, index) => {
        let radSet =
        [
            checking =
            [
                (location[0] * Math.PI) / 180,
                (location[1] * Math.PI) / 180
            ],
            current =
            [
                (myLoc[0] * Math.PI) / 180,
                (myLoc[1] * Math.PI) / 180
            ]
        ]

        let distSet =
        [
            distLat = radSet.current[0] - radSet.checking[0],
            distLon = radSet.current[1] - radSet.checking[1]
        ]

        let alpha =
            Math.sin(distSet.distLat / 2) ** 2 + 
            Math.cos(radSet.checking[0]) *
            Math.cos(radSet.current[0]) *
            Math.sin(distSet.distLon / 2) ** 2;
        let beta =
            2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1 - alpha));

        let dist = R * beta;

        console.log("Distance: " + dist);

        allDist[index] = dist;

        console.log("Calculated distance for " + index + " :  " + allDist[index]);
    });

    let previousLowest =
    [
        lowNum,
        lowIndex
    ]

    allDist.forEach((distance, index) => {
        if (previousLowest == null) {
            previousLowest[0] = distance;
            previousLowest[1] = index;

            console.log("No previous lowest found");
            // return;
        } else {
            if (distance < previousLowest[0]) {
                previousLowest[0] = distance;
                previousLowest[1] = index;

                console.log("Distance to location index " + index + " is lower than previous location (New location is " + distance + "km )");
                // return;
            }
        }
    });

    dropobj.value = previousLowest[1];
    // tickobj.innerHTML = previousLowest[1];
    console.log("Set button value");
}

function InitTickets() {
    locationIndex = dropobj.selectedIndex;

    if (allNow[locationIndex] == null) {
        allNow[locationIndex] = allStart[locationIndex];
    }

    maxtickobj.innerHTML = "/ " + allMax[locationIndex];
    tickobj.innerHTML = allNow[locationIndex];

    max = allMax[locationIndex];
    speed = allSpeed[locationIndex];
    start = allStart[locationIndex];
    now = allNow[locationIndex];
    sold = allSold[locationIndex];

    switch (allSold[locationIndex]) {
        case true:
            tickobj.innerHTML = "Sold Out";

            hide(maxtickobj);
            hide(buttonobj);
            unhide(palobj);
            break;
        case false:
            unhide(maxtickobj);
            unhide(buttonobj);
            hide(palobj);
            // break;
    }

    if (intervalIds == null) {
        intervalIds =
        [
            setInterval(UpdateTickets, allSpeed[locationIndex], allSpeed[locationIndex] * 30),
            setInterval(UpdateTickets, allSpeed[locationIndex] / 1.3141592, allSpeed[locationIndex] * 15)
        ]
    } else {
        intervalIds.forEach(interval => {
            clearInterval(interval);
        });

        intervalIds =
        [
            setInterval(UpdateTickets, allSpeed[locationIndex], allSpeed[locationIndex] * 30),
            setInterval(UpdateTickets, allSpeed[locationIndex] / 1.3141592, allSpeed[locationIndex] * 15)
        ]
    }
}

function UpdateTickets(max) {
    now += Math.max(1, Math.max(Math.round(Math.random() * 3), Math.round(Math.random() * max)));

    switch (now > max || sold) {
        case true:
            tickobj.innerHTML = "Sold Out";
            allSold[locationIndex] = true;

            hide(maxtickobj);
            hide(buttonobj);
            unhide(palobj);
            break;
        case false:
            tickobj.innerHTML = now;
            allNow[locationIndex] = now;
    }
}

InitTicketsOnce();
InitTickets();

document.getElementById("location-selector").onchange = InitTickets;

