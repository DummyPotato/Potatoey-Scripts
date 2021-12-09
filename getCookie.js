var CookieName = 'COOKIE NAME HERE';

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
   
    return null;
}

var token = getCookie(CookieName);
if (token) {
alert(token);
}
else {
alert('Cookie not found');
}
