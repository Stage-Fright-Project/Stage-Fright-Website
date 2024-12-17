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

let allLoc =
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
    pitSold = false,
    newSold = false,
    nycSold = false
]

let tickobj = document.getElementById("tickets");
let maxtickobj = document.getElementById("maximum-tickets");

let buttonobj = document.getElementById("purchase-ticket");
let dropobj = document.getElementById("location-selector");
let palobj = document.getElementById("pal-ticket");

function InitTicketsOnce() {
    const R = 6371;
    const myLoc =
    [
        myLat,
        myLon
    ]

    switch ("geolocation" in navigator) {
        case true:
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    myLoc[0] = position.coords.latitude;
                    myLoc[1] = position.coords.longitude;

                    while (myLoc[0] == null && myLoc[1] == null) {}

                    console.log("User position found to be " + myLoc[0] + " " + myLoc[1]);
                },
        
                (error) => {
                    myLoc[0] = 36.025492;
                    myLoc[1] = -95.970157;
                }
            );
            break;
        case false:
            myLoc[0] = 36.025492;
            myLoc[1] = -95.970157;
            break;
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

        allDist[index] = dist;

        console.log("Calculated distance for " + index + " :  " + allDist[index]);
    });

    let previousLowest =
    [
        lowNum,
        lowIndex
    ];

    allDist.forEach((distance, index) => {
        if (previousLowest == null) {
            previousLowest[0] = distance;
            previousLowest[1] = index;

            console.log("No previous lowest found");
            return;
        } else {
            if (distance < previousLowest[0]) {
                previousLowest[0] = distance;
                previousLowest[1] = index;

                console.log("Distance to location index " + index + " is lower than previous location (New location is " + distance + "km )");
                return;
            }
        }
    });

    dropobj.value = previousLowest[1];
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
            break;
    }

    if (intervalIds == null) {
        intervalIds =
        [
            setInterval(UpdateTickets, allSpeed[locationIndex]),
            setInterval(UpdateTickets, allSpeed[locationIndex] / 1.3141592)
        ]
    } else {
        intervalIds.forEach(interval => {
            clearInterval(interval);
        });

        intervalIds =
        [
            setInterval(UpdateTickets, allSpeed[locationIndex]),
            setInterval(UpdateTickets, allSpeed[locationIndex] / 1.3141592)
        ]
    }
}

function UpdateTickets() {
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