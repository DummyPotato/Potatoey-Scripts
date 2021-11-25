javascript:

/*A new and better casino with a load of new features that is being worked on*/

console.log('Launching Casino!');

function afterNum() { 

console.log('test123321'); 

} 

var pickedNum; 

function pickNum() { 

var minNumber = 1; 
var maxNumber = 10; 
var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); 

console.log('Number randomly picked!'); 
} 

var username; 
var password;
function game() { 
console.log('Launching Game!'); 
var askNumber = prompt('Hey ' + username + ', what number from 1 to 10 do you bet?');
console.log('User picked a number.');
var incorrectNum = false;


if (askNumber > 10) { 
var incorrectNum = true;
}

if (askNumber < 0) { 
incorrectNum = true; 
}

if (incorrectNum == true) {
console.log('Invalid number, kicked.');
alert('Number Invalid, kicked.');
}

else {
console.log('Number Valid!');
afterNum();
}

}

function clickedPlay2() {


console.log('Loading Assets!');


}

function checkPass() {


if (password == '/cheat zaps') {
console.log(username + ' just activated a zap cheat!');
var newZaps = prompt('You activated a zap cheat, nice job! Enter the amount of zaps you want: ');
zaps = newZaps;
console.log(username + ' new zap amount is ' + zaps + '!');
enterPassword();


}

else {

console.log('Account Setup finished!');
console.log('Password set!');
alert('Your account is now setup! You can press OK when you are ready to play! ');
game();
}
}

function enterPassword() {
var askPass = prompt('Enter a password for your new account:');
password = askPass;
checkPass();
}

function afterTokenHack() {
var askUsername = prompt('Enter a username for your new account:');
username = askUsername;
usernameValid();
}

function usernameValid() {

if (username == '/cheat tokens') {

console.log('User just activated a token cheat hack!');
var newAmountOfTokens = prompt('Nice, you activated a token cheat hack, enter the amount of tokens you want:');
tokens = newAmountOfTokens;
console.log('Users new amount of tokens is ' + tokens + '!'); afterTokenHack();
}

else {

console.log('Users new username is ' + username + ' !'); enterPassword();
}
}

function checkUsername() {

if (username == null) {

var askUsername = prompt('Username cannot be null, enter a username for your new account:');
username = askUsername;
checkUsername();

}

else {

usernameValid();

}
}

var tokens = 0;
var zaps = 0;
var hasAccount;
var choseToPlay = false;

function clickedPlay() {

console.log('User chose to play!');

if (hasAccount == null) {

hasAccount = 1;
tokens = 100;
zaps = 3;

console.log('No account found on this page, creating a new one.');
alert('There is no account found on this page, so we are creating you a new one.');
var askUsername = prompt('Enter a username for your new account:');
username = askUsername;
checkUsername();
}
}

var askToPlay = confirm('Play Casino?');

if (askToPlay == true) {

choseToPlay = true;
clickedPlay2();
clickedPlay();

}

else {

console.log('User chose to not play.');

}
