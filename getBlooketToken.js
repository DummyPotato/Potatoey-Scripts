var myWindow = window.open("", "MsgWindow", "width = 1, height = 1");
myWindow.document.write("<p>" + localStorage.token + "</p>");
