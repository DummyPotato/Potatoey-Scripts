javascript:

/*How to use: Just run the code and it will run in 5 seconds and do binary every five seconds from that point on*/

var prevHTML = document.body.innerHTML;
var counter = 1;
function phaseOne() {
counter = 1;
document.body.innerHTML = prevHTML;setTimeout(phaseTwo,5000);
}
function phaseTwo() {
if (counter == 1) {
document.body.innerHTML = '01010001010001010101010100000010101010101010101';
}
if (counter == 2) {
document.body.innerHTML = '010101010011110110101010101101010101101';
}
if (counter == 3) {document.body.innerHTML = '01010101110101010110101010111111110001100101110100101011010';
}
if (counter == 4) {document.body.innerHTML = '0101010100111101101010101011010';
}
if (counter == 5) {
document.body.innerHTML = '00101010101010010101010101010101001111110001010010';
}
if (counter < 5.1) {
setTimeout(phaseTwo,30);
}
if (counter == 6) {
phaseOne();
}
counter = counter + 1;
}
phaseOne();
