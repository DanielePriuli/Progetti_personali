
var loginFormUsername=document.querySelector("#login-form-div>strong");
var chooseInputs=document.querySelectorAll("td>input")
var settingsButtons=document.getElementsByClassName("settings-butt");
var pswShowSett=document.querySelector("#choose-psw + i");
var chooseThemeColor=document.getElementById("choose-colorTheme");
var chooseFile=document.querySelector("input[type='file']");
var fileButton=document.querySelector("#choose-userImg + button");
var profileLogo=document.querySelector("#user-butt>img");
var userImgURL=window.URL.createObjectURL(chooseFile.files[0]);
var backgroundElements=[
    document.getElementsByTagName("header")[0],
    document.getElementsByTagName("footer")[0],
    document.getElementsByTagName("nav")[0],
    document.getElementById("menu-div"),
    document.getElementById("search-form"),
    document.getElementById("search-field")
]
function chngBgColor() {
    for (let element of backgroundElements) {
        element.style.backgroundColor=chooseThemeColor.value;
    }
}
settingsButtons[0].addEventListener("click", ()=>{
    loginFormUsername.innerText=chooseInputs[0].value;
});
function showPswSett() {
    if (pswInput.type=="password") {
        chooseInputs[1].type="text";
    } else {
        chooseInputs[1].type="password";
    }
    pswShowSett.classList.toggle("bi-eye");
}
pswShowSett.addEventListener("click", showPswSett);
settingsButtons[3].addEventListener("click", chngBgColor);
fileButton.addEventListener("click", (e)=>{
    chooseFile.click();
});
function chngUserImg() {
    profileLogo.src=userImgURL;
}

settingsButtons[2].addEventListener("click", chngUserImg);
