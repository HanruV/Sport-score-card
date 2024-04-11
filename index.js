let homeCount = document.getElementById("hcount")
let guestCount = document.getElementById("gcount")
let homeReset = document.getElementById("h-reset")
let guestReset = document.getElementById("g-reset")


// home count
let hcount = 0

function increaseHomeScoreOne() {
    hcount += 1
    homeCount.textContent = hcount
}

function increaseHomeScoreTwo() {
    hcount += 2
    homeCount.textContent = hcount
}

function increaseHomeScoreThree() {
    hcount += 3
    homeCount.textContent = hcount
}

// home reset

function setHomeScoreZero() {
    hcount = 0
    homeCount.textContent = hcount
}

// guest count
let gcount = 0

function increaseGuestScoreOne() {
    gcount += 1
    guestCount.textContent = gcount
}

function increaseGuestScoreTwo() {
    gcount += 2
    guestCount.textContent = gcount
}

function increaseGuestScoreThree() {
    gcount += 3
    guestCount.textContent = gcount
}

// guest reset

function setGuestScoreZero() {
    gcount = 0
    guestCount.textContent = gcount
}