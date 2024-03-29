const cookieConsentDisplayName = "cookieConsent_"
const cookieConsentNumber = "1";
const cookieConsentName = cookieConsentDisplayName + cookieConsentNumber;
var cookieConsent = false;

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}

const checkCookie = () => {
    var concet_obtained = getCookie(cookieConsentName);
    if (concet_obtained == 'accept') {
        cookieConsent = true;
        var ga = document.createElement('script');
        ga.src = "https://www.googletagmanager.com/gtag/js?id=G-Z7MQP0SRWK";
        ga.async = true;
        document.head.appendChild(ga);
        return;
    }
};

checkCookie();
