var menuButtons=document.getElementsByClassName("nav-option");
var hambMenu=document.getElementById("menu-butt");
var nav=document.getElementsByTagName("nav")[0];
var advSrcMenu=document.getElementById("adv-search-div");
var userIcon=document.getElementById("user-butt");
var loginForm=document.getElementById("login-form-div");
var pswShow=document.querySelectorAll("#login-form label")[1].childNodes[1];
var pswShow=document.querySelectorAll("#login-form label")[1].childNodes[3];

var pswInput=document.querySelectorAll("#login-form label")[1].childNodes[1];
undefined
function showPsw() {
    if (pswInput.type=="password") {
        pswInput.type="text";
    } else {
        pswInput.type="password";
    }
    pswShow.classList.toggle("bi-eye");
}
function showNav() {
    advSrcMenu.classList.remove("show");
    nav.classList.toggle("show");
}
function showAdvSrc() {
    nav.classList.remove("show");
    advSrcMenu.classList.toggle("show");
}
function showLoginForm() {
    loginForm.classList.toggle("show");
}
hambMenu.addEventListener("click", showNav);
document.getElementById("adv-search").addEventListener("click", showAdvSrc);
userIcon.addEventListener("click", showLoginForm);
pswShow.addEventListener("click", showPsw);
