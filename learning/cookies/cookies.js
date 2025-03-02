/*
cookie = small text file stored on your computer 
used to remember information about the user saved in name=value pairs
*/

//console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Sok; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Nan; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"
// console.log(document.cookie);
// deleteCookie("firstName");
// deleteCookie("lastName");
setCookie("fistName", "Me", 10);
setCookie("lastName", "Soknan", 10);


function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");

    for (let element of cArray) {
        if (element.startsWith(name + "=")) {
            return element.substring(name.length + 1);
        }
    }
    return null; // Return null if cookie is not found
}


console.log(getCookie("fistName"));