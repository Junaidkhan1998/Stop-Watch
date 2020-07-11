var min = 0
var sec = 0
var milli = 0
var minHead = document.getElementById('min')
var secHead = document.getElementById('sec')
var milliHead = document.getElementById('milli')
var interval
var stopWatchEl = document.querySelector('.stopwatch') 
var lapsContainer = document.querySelector('.lapslist')

function timer() {
    stopWatchEl.textContent = getTimer()
    milliHead.innerHTML = milli
    milli++
    

    if (milli >= 100) {
        sec++
        secHead.innerHTML = sec
        milli = 0

    }
    else if (sec >= 60) {
        min++
        minHead.innerHTML = min
        sec = 0

    }
}

function start() {
    if (!interval) {
        interval = setInterval(timer, 10)
    }
    

}

function stop(){
    stopWatchEl.textContent = getTimer()
    clearInterval(interval)
    min = 0
    sec = 0
    milli = 0
    interval = false

}


function pause() {
    clearInterval(interval)
    interval = false
    
}

function restart() {
    stop()
    start()
}

function resetlaps(){
    lapsContainer.innerHTML = ""

}

function getTimer(){
    return (min < 10 ? "0" + min : min ) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (milli < 10 ? "0" + milli : milli);
}

function laps(){
    if(interval){
    var li = document.createElement('li')
    li.innerText = getTimer()
    lapsContainer.append(li)
    }

}



