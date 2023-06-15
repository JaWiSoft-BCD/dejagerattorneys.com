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