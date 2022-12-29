
function timeAndDate() {
let date = new Date();
let getDate = date.toLocaleDateString();
let time = date.toLocaleTimeString();

document.getElementById('time').innerHTML = time;
document.getElementById('date').innerHTML = getDate;
}

//live time
setInterval(timeAndDate, 1000);




window.red = 0;
window.green = 0;
window.blue = 0;

function redFunction(value) {
    window.red = value;
    changeBack();
}

function greenFunction(value) {
    window.green = value;
    changeBack();
}

function blueFunction(value) {
    window.blue = value;
    changeBack();
}

function changeBack() {
    document.getElementById('output').innerHTML = window.red + ", "+window.green + ", "+window.blue;
    document.body.style.backgroundColor = "rgb("+window.red+","+window.green+","+window.blue+")";
}