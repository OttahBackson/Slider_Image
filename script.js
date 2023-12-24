const header = document.querySelector("header");
const wrapper = document.querySelector(".wrapper");
const fontIcon= document.querySelectorAll(".wrapper i")
const seaImg = document.querySelector(".sea-img")
const images = document.querySelectorAll("img")

window.addEventListener("scroll", (e) => {
    e.preventDefault();
    header.classList.add("sticky", window.scrollY > 0);
})
// console.log(seaImg)
let imageIndex = 1,
intervalid;

const autoSlide = () => {
    intervalid = setInterval(() => slideImage(++imageIndex), 6000)
}
autoSlide();

const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    seaImg.style.transform = `translate(-${imageIndex * 100}%)`;
}
const updateClick = (e) => {
    clearInterval(intervalid);
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
}

fontIcon.forEach((i) => i.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalid));
wrapper.addEventListener("mouseleave", autoSlide);