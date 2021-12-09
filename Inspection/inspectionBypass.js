javascript:

/*How to use: Once you run the code, it will create a button in the bottom left of your corner which you can move by holding your left mouse button and moving it around
your screen. To use just click it, to enter something in the console click the bar on the bottom*/

(function () {
var script =  document.createElement('script');
script.src="//cdn.jsdelivr.net/npm/eruda";
document.body.appendChild(script);
script.onload = function () {
eruda.init()
} })();
