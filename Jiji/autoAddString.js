javascript:

/*How to use: Once you run it, it will constantly add the string "1" for time and puzzles.*/

alert('Jiji Auto Glitch Version 1.0 Launched!');
var nameElement = document.getElementById('kids-name');
var timeElement = document.getElementById('l--toolbar--puzzlescollected-sessionseconds--number');
var puzzleElement = document.getElementById('l--toolbar--puzzlescollected-puzzlescollected--number');
var alrAsk;
var puzz;var tim;if (alrAsk == null) {
alrAsk = true;
nameElement.innerHTML = 'Status: Asking...';
var prom1 = prompt('Enter the amount of time you want to set:');
var prom2 = prompt('Enter the amount of puzzles you want to set:');
puzz = prom2;
tim = prom1;
}
nameElement.innerHTML = 'Status: Applying...';
timeElement.innerHTML = tim;
puzzleElement.innerHTML = puzz;
if (alrAsk == true) {
alert('Values Found, Applying...');
}
setTimeout(nameBack,1500);
function nameBack() {
nameElement.innerHTML = 'Status: None.';
alert('Success!');
}
