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
           }, 1000);
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
         for (let i = 0; i < carouselInners.length; i++) {
        const inner = carouselInners[i];
        if (inner.classList.length==3 && inner.classList[2]=="c-activated") {
               inner.classList.add("right-inner");
               setTimeout(() => {
               inner.classList.remove("left-inner")
               inner.classList.remove("c-activated");
               inner.classList.remove("right-inner");
               }, 1000);
           if (i==0) {
               carouselInners[2].classList.remove("left-inner");
               carouselInners[2].classList.add("c-activated");
               carouselInners[1].classList.remove("right-inner");
               carouselInners[1].classList.add("hide");
               carouselInners[1].classList.add("left-inner");
               setTimeout(() => {
                    carouselInners[1].classList.remove("hide");
               }, 1000);
           } else {
               carouselInners[i-1].classList.remove("left-inner");
               carouselInners[i-1].classList.add("c-activated");
               carouselInners[(i==2)? i-2:2].classList.remove("right-inner");
               carouselInners[(i==2)? i-2:2].classList.add("hide");
               carouselInners[(i==2)? i-2:2].classList.add("left-inner");
               setTimeout(() => {
                    carouselInners[(i==2)? i-2:2].classList.remove("hide");
               }, 1000);
           }
           break;
        }
    }
}
function animate() {
    document.getElementsByClassName("c-carousel-inner")[0].classList.toggle("animate");
}
nextButt.addEventListener("click", nextSlide);
prevButt.addEventListener("click", prevSlide);