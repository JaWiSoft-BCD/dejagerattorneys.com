const cookieConsentBanner = document.querySelector('#cookie-consent-banner');
const acceptButton = document.querySelector('#cookie-consent-banner__accept-button');
const rejectButton = document.querySelector('#cookie-consent-banner__reject-button');

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
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
    cookieConsentBanner.style.display = 'none';
    var concet_obtained = getCookie("cookieConsent");
    if (concet_obtained == 'accept') {
        var ga = document.createElement('script');
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID';
        ga.async = true;
        document.head.appendChild(ga);
        return;
    }
    cookieConsentBanner.style.display = 'block';
};

checkCookie();

acceptButton.addEventListener('click', () => {
    document.cookie = 'cookieConsent=accept; max-age=2592000; path=/';
    window.location.reload();
});

rejectButton.addEventListener('click', () => {
    cookieConsentBanner.style.display = 'none';
});

