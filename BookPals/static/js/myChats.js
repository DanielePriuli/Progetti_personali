var chatOptMenuButts=document.getElementsByClassName("show-chat-opt");
var chatOptMenus=document.getElementsByClassName("chat-opt");
for (let i = 0; i < chatOptMenuButts.length; i++) {
    const button = chatOptMenuButts[i];
    button.addEventListener("click", ()=>{
        chatOptMenus[i].classList.toggle("show");
    });
}