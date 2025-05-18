var carouselInners=document.querySelectorAll(".c-carousel-inner");
var slideStates=document.querySelectorAll(".slide-change");
var prevButt=document.querySelector(".slide-prev");
var nextButt=document.querySelector(".slide-next");
function nextSlide() {
    for (let i = 0; i < carouselInners.length; i++) {
        const inner = carouselInners[i];
        if (inner.classList.length==3 && inner.classList[2]=="c-activated") {
           inner.classList.add("left-inner");
           setTimeout(() => {
                inner.classList.remove("c-activated");
           }, 1500);
           if (i==carouselInners.length-1) {
                carouselInners[0].classList.add("c-activated");
                carouselInners[1].classList.remove("left-inner");
           } else {
                carouselInners[i+1].classList.add("c-activated");
                carouselInners[(i==0)? i+2:0].classList.remove("left-inner");
           }
           break;
        }
    }
}
function prevSlide() {

}
function animate() {
    document.getElementsByClassName("c-carousel-inner")[0].classList.toggle("animate");
}
nextButt.addEventListener("click", nextSlide);
prevButt.addEventListener("click", prevSlide);