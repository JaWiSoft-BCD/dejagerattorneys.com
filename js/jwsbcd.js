const cookieConsentBanner = document.querySelector('#cookie-consent-banner');
const acceptButton = document.querySelector('#cookie-consent-banner__accept-button');
const rejectButton = document.querySelector('#cookie-consent-banner__reject-button');
if (typeof cookieConsentName === 'undefined') {
    // comes from cookieConsent.js
    console.log("Cookie banner may not work due to cookieConsent.js not being imported or not being imported first.")
}

acceptButton.addEventListener('click', () => {
    document.cookie = cookieConsentName + '=accept; max-age=2592000; path=/';
    window.location.reload();
});

rejectButton.addEventListener('click', () => {
    document.cookie = 'cookieConsent=reject; max-age=3600; path=/';
    cookieConsentBanner.style.display = 'none';
});

const bannerDispaly = () => {
    var concet_obtained = cookieConsent; //obtained from cookieConsent.js
    if (concet_obtained == 'accept') {
        cookieConsentBanner.style.display = 'none';
        return;
    }
    if (concet_obtained == 'reject') {
        cookieConsentBanner.style.display = 'none';
        return;
    }
    cookieConsentBanner.style.display = 'block';
}

bannerDispaly();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlidesJwsbcd(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-jwsbcd");
    let dots = document.getElementsByClassName("dot-jwsbcd");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active-jwsbcd", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-jwsbcd";
}

var de_jager_url = "https://www.dejagerattorneys.com";
var de_jager_title = "De Jager Attorneys";

var socialLinks = document.querySelectorAll(".social-sharing-widget-de-jager a");
socialLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    href = href.replace("[URL]", encodeURIComponent(de_jager_url));
    href = href.replace("[TITLE]", encodeURIComponent(de_jager_title));
    link.setAttribute("href", href);
});