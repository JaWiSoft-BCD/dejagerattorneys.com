function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function acceptCookies() {
    setCookie("acceptedCookies", "true", 30);
    document.getElementById("cookiePopup").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
    if (!getCookie("acceptedCookies")) {
        document.getElementById("cookiePopup").style.display = "block";
    }
});