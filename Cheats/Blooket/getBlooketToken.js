javascript:

/*How to use: Just execute the code while being logged in Blooket and a new window will pop-up with the token*/

var myWindow = window.open("", "MsgWindow", "width = 400, height = 200");
myWindow.document.write("<p>" + localStorage.token + "</p>");
