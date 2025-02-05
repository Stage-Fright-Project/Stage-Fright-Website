

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

// document.querySelector('video').playbackRate = 1;

// function logError(error) {
//     document.getElementById('errorViewer').innerHTML = error;
// }

/*--------------------------------------------------------------
# Map
--------------------------------------------------------------*/

const map1 = document.getElementById("map-1");
const map2 = document.getElementById("map-2");
const map3 = document.getElementById("map-3");
const map4 = document.getElementById("map-4");
const map5 = document.getElementById("map-5");
const map6 = document.getElementById("map-6");
const map7 = document.getElementById("map-7");
const map8 = document.getElementById("map-8");
const map9 = document.getElementById("map-9");
const map10 = document.getElementById("map-10");
const map11 = document.getElementById("map-11");
const map12 = document.getElementById("map-12");
const mapName = document.getElementById("map-name");
const mapTime = document.getElementById("map-time");
const mapInfo = document.getElementById("map-info-block");

// const mapdwropobj = document.getElementById('map-location-selector');

const mapNames = [
    "Los Angeles, California",
    "San Francisco, California",
    "Pheonix, Arizona",
    "Houston, Texas",
    "Dallas, Texas",
    "New Oreleans, Louisiana",
    "Miami, Florida",
    "Nashville, Tennessee",
    "Chicago, Illinois",
    "Pittsburgh, Pennsylvania",
    "Newark, New Jersey",
    "New York City, New York"
]

const mapTimes = [
    "May 3, 7:00 PM",
    "May 9, 7:00 PM",
    "May 16, 6:50 PM",
    "May 29, 5:15 PM",
    "June 2, 7:00 PM",
    "June 13, 6:30 PM",
    "June 20, 5:00 PM",
    "June 30, 5:25 PM",
    "July 6, 4:45 PM",
    "July 13, 6:15 PM",
    "July 19, 7:30 PM",
    "July 25, 8:15 PM"
]

const mapPoints = [
    map1,
    map2,
    map3,
    map4,
    map5,
    map6,
    map7,
    map8,
    map9,
    map10,
    map11,
    map12
]

// mapPoints.forEach((point, index) => {
//     point.addEventListener('click', function() {
//         highlight(point, "map-point");
//         mapName.innerHTML = mapNames[index];
//         mapTime.innerHTML = mapTimes[index];
//         locationIndex = index;
//         dropobj.value = index;
//         // mapdropobj.value = index;

//         mapPoints.forEach(others => {
//             if (others != point) {
//                 unhighlight(others, "map-point")
//             }                
//         });

//         InitTickets();
//     });
// });

hide(mapInfo);

mapPoints.forEach((point, index) => {
    unhighlight(point, "map-point")

    point.addEventListener("click", (event) => {
        unhide(mapInfo);
        mapInfo.style.left = `${event.pageX}px`;
        mapInfo.style.top = `${event.pageY}px`;

        highlight(point, "map-point");
        mapName.innerHTML = mapNames[index];
        mapTime.innerHTML = mapTimes[index];
        locationIndex = index;
        dropobj.value = index;
        // mapdropobj.value = index;

        mapPoints.forEach(others => {
            if (others != point) {
                unhighlight(others, "map-point")
            }                
        });

        InitTickets();
    });
});

function UpdateMap(index) {
    var point = mapPoints[index];

    highlight(point, "map-point");
    mapName.innerHTML = mapNames[index];
    mapTime.innerHTML = mapTimes[index];


    mapPoints.forEach(others => {
        if (others != point) {
            unhighlight(others, "map-point")
        }                
    });
}


// connect(map1, map2);
// connect(map2, map3);
// connect(map3, map4);
// connect(map4, map5);
// connect(map5, map6);
// connect(map6, map7);
// connect(map7, map8);
// connect(map8, map9);
// connect(map9, map10);
// connect(map10, map11);

/*--------------------------------------------------------------
# Discovery
--------------------------------------------------------------*/

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const discList = document.getElementsByClassName("disc-li");
const discName = document.getElementById('discName');
const discDesc = document.getElementById('discDesc');
const discItems = document.getElementsByClassName('disc-item');

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
    "Wanderer's<br>Sky",
    "Whispers in<br>the Pines",
    "Beneath the<br>Blackwater Sky",
    "Funeral for<br>the Stars",
    "Split by<br>the Sea",
    "Solitude for<br>the Shore"
]

const discListDesc =
[
    "A sonic journey through vast landscapes of sound, Wanderer’s Sky blends soaring guitar riffs with introspective lyrics, capturing the restless spirit of those who chase the horizon.",
    "Haunting melodies and ethereal harmonies intertwine in Whispers in the Pines, an album that echoes with the ghosts of lost love, untold stories, and the secrets carried by the wind.",
    "Dark, brooding, and immersive, Beneath the Blackwater Sky is a deep dive into the unknown, weaving together heavy, atmospheric instrumentals with cryptic storytelling.",
    "A melancholic yet explosive tribute to endings and rebirth, Funeral for the Stars delivers powerful ballads and anthemic choruses that lament the fading light while embracing new beginnings.",
    "Emotionally charged and drenched in longing, Split by the Sea tells a tale of love and loss through waves of dynamic, crashing instrumentals and raw, heartfelt vocals.",
    "A reflective, almost meditative collection of tracks, Solitude for the Shore captures the loneliness and beauty of standing at the water’s edge, staring into the endless unknown."
]

disable(buttonLeft, "disc-btn");
highlight(discList[0], "disc-li");
highlight(discItems[0], "disc-item")
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

    highlight(discItems[discIndex], "disc-item");
    unhighlight(discItems[discIndex - 1], "disc-item");

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

    highlight(discItems[discIndex], "disc-item");
    unhighlight(discItems[discIndex + 1], "disc-item");

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
        unhighlight(discItems[maxDiscIndex], "disc-item");
        discIndex = 0;
    }

    highlight(discList[discIndex], "disc-li");
    unhighlight(discList[discIndex - 1], "disc-li");

    highlight(discItems[discIndex], "disc-item");
    unhighlight(discItems[discIndex - 1], "disc-item");

    discName.innerHTML = discListNames[discIndex];
    discDesc.innerHTML = discListDesc[discIndex];
    }
  }

  setInterval(flip, 7500);

/*--------------------------------------------------------------
# Logo Movement
--------------------------------------------------------------*/

// let transx = 0;
// let transy = 0;
// let scale = 20;
// let rotation = 0;
// let rotationFlipper = 0;

// function move() {
//     let logo = document.getElementById('mainLogoId');
//     transx = Math.random() * 3;
//     transy = Math.random() * 3;
//     rotation = Math.random() * 15;
//     scale = (Math.random() + 1) * 0.25 + 1;
    
//     rotationFlipper = Math.random();

//     if (rotationFlipper < 0) {
//         logo.style.transform = `translate(${transx}rem, ${transy}rem) rotate(${180 - rotation}deg) scale(${scale})`;
//     } else {
//         logo.style.transform = `translate(${transx}rem, ${transy}rem) rotate(${rotation}deg) scale(${scale})`;
//     }


// }

// setInterval(move, 250);

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
    [
        34.052235,
        -118.243682
    ],
    [
        37.774929,
        -122.419418
    ],
    [
        33.448376,
        -112.074036
    ],
    [
        29.760427,
        -95.369804
    ],
    [
        32.776665,
        -96.796989
    ],
    [
        29.951763,
        -90.074617
    ],
    [
        25.761681,
        -80.191788
    ],
    [
        36.162663,
        -86.781601
    ],
    [
        41.878113,
        -87.629799
    ],
    [
        40.440624,
        -79.995888
    ],
    [
        40.731510,
        -74.174393
    ],
    [
        40.712776,
        -74.005974
    ]
]

let allDist =
[
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]

// let allPop =
// [
//     laPop,
//     saPop,
//     phPop,
//     hPop,
//     dPop,
//     noPop,
//     mPop,
//     nPop,
//     cPop,
//     pitPop,
//     newPop,
//     nycPop
// ]

let allMax =
[
    8000,
    7500,
    0,
    5500,
    5000,
    5000,
    6000,
    4500,
    4000,
    4500,
    0,
    8500
]

let allSpeed =
[
    600 * 2,
    660 * 2,
    0,
    710 * 2,
    730 * 2,
    740 * 2,
    640 * 2,
    750 * 2,
    750 * 2,
    740 * 2,
    0,
    550 * 2
]

let allSellAmount = [
    6,
    5,
    3,
    4,
    4,
    3,
    5,
    4,
    3,
    3,
    3,
    8
]

let allStart = 
[
    4863,
    3753,
    0,
    3841,
    3748,
    2830,
    4728,
    3527,
    2738,
    2936,
    0,
    5936
]

let allNow = 
[
    allStart[0],
    allStart[1],
    allStart[2],
    allStart[3],
    allStart[4],
    allStart[5],
    allStart[6],
    allStart[7],
    allStart[8],
    allStart[9],
    allStart[10],
    allStart[11]
]

let allSold =
[
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false
]

let intervalIds =
[
    setInterval(() => {}, 0),
    setInterval(() => {}, 0)
]

let max;
let speed;
let start;
let now;
let sold;

let locationIndex = 0;

const tickobj = document.getElementById("tickets");
const maxtickobj = document.getElementById("maximum-tickets");

const buttonobj = document.getElementById("purchase-ticket");
const dropobj = document.getElementById("location-selector");
const palobj = document.getElementById("pal-ticket");

function InitTicketsOnce() {
    const R = 6371;
    let myLoc =
    [
        36.025492,
        -95.970157
    ]

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                myLoc[0] = position.coords.latitude;
                myLoc[1] = position.coords.longitude;

                    // while (myLoc[0] == null && myLoc[1] == null) {}

                console.log("User position found to be " + myLoc[0] + " " + myLoc[1] + "/n Using position for nearest tour location.");
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
            // checking =
            [
                (location[0] * Math.PI) / 180,
                (location[1] * Math.PI) / 180
            ],
            // current =
            [
                (myLoc[0] * Math.PI) / 180,
                (myLoc[1] * Math.PI) / 180
            ]
        ]

        let distSet =
        [
            radSet[1][0] - radSet[0][0],
            radSet[1][1] - radSet[0][1]
        ]

        let alpha =
            Math.sin(distSet[0] / 2) ** 2 + 
            Math.cos(radSet[0][0]) *
            Math.cos(radSet[1][0]) *
            Math.sin(distSet[1] / 2) ** 2;
        let beta =
            2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1 - alpha));

        let dist = R * beta;

        console.log("Distance: " + dist);

        allDist[index] = dist;

        console.log("Calculated distance for " + index + " :  " + allDist[index]);
    });

    let previousLowest =
    [
        -1,
        -1
    ]

    allDist.forEach((distance, index) => {
        if (previousLowest[0] == -1) {
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
    UpdateMap(previousLowest[1]);
    console.log("Set button value");
}

function InitTickets() {
    locationIndex = locationIndex != null ? dropobj.selectedIndex : 0;

    if (allNow[locationIndex] == 0) {
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

    // if (intervalIds[0] == setInterval(() => {}, 100000)) {
    //     intervalIds =
    //     [
    //         setInterval(UpdateTickets, allSpeed[locationIndex], allMax[locationIndex], allSellAmount[locationIndex]),
    //         setInterval(UpdateTickets, allSpeed[locationIndex] / 1.3141592, allMax[locationIndex], allSellAmount[locationIndex] * Math.E)
    //     ]
    // } else {
    //     intervalIds.forEach(interval => {
    //         clearInterval(interval);
    //     });

    //     intervalIds =
    //     [
    //         setInterval(UpdateTickets, allSpeed[locationIndex], allMax[locationIndex], allSellAmount[locationIndex]),
    //         setInterval(UpdateTickets, allSpeed[locationIndex] / 1.3141592, allMax[locationIndex], allSellAmount[locationIndex] * Math.E)
    //     ]
    // }

    intervalIds.forEach(interval => {
        clearInterval(interval);
    });

    intervalIds =
    [
        setInterval(() => {UpdateTickets(allMax[locationIndex], allSellAmount[locationIndex])}, allSpeed[locationIndex]),
        setInterval(() => {UpdateTickets(allMax[locationIndex], allSellAmount[locationIndex] * 2.573)}, allSpeed[locationIndex] / 1.3141592)
    ]
}

function UpdateTickets(max, speed) {
    // now += Math.max(1, Math.max(Math.round(Math.random() * 3), Math.round(Math.random() * max)));
    // if (now == null) {
    //     now = allNow[locationIndex != null ? locationIndex : 0];
    // }

    now += Math.round(Math.random() * speed);

    // logError(now);
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
            document.getElementById('map-tickets').innerHTML = now;
            allNow[locationIndex] = now;

            unhide(maxtickobj);
            unhide(buttonobj);
            hide(palobj);
            break;
    }
}

InitTicketsOnce();
InitTickets();

document.getElementById("location-selector").onchange = InitTickets;

