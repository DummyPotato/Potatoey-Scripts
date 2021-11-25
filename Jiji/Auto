javascript:

/*How to use: Once you run it, it will constantly add time and puzzles. You can edit some lines where it says you can like the amount of puzzles it starts with, but
dont edit anything except the number*/

var currentPuzz = 0;
var currentTime = 0;
var amountOfTime = 74; /*Change this to the amount of time it starts with*/
var amountOfPuzz = 24; /*Change this to the amount of puzzles it starts with*/
var i = 1;
var puzzElement = document.getElementById('l--toolbar--puzzlescollected-puzzlescollected--number');
var timeElement = document.getElementById('l--toolbar--puzzlescollected-sessionseconds--number');
var nameElement = document.getElementById('kids-name');
var puzz = currentPuzz + amountOfPuzz;
var time = currentTime + amountOfTime;
nameElement.innerHTML = 'Status: Running.';
function start() {
puzzElement.innerHTML = puzz;
timeElement.innerHTML = time;
puzz = puzz + 1;
time = time + 1;
setTimeout(start2,10);
}
function start2() {
setTimeout(start,10);
}
start();
