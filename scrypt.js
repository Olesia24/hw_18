const images = [
    "media/2.jpeg", 
    "media/3.jpeg", 
    "media/4.jpeg", 
    "media/5.jpeg"
];

let imgIndex = 0;

const leftBtnNode = document.querySelector(".button .left");
const rightBtnNode = document.querySelector(".button .right");


leftBtnNode.addEventListener("click", () =>{
    const imageNode = document.querySelector(".image");
    imageNode.src = images[Math.abs(--imgIndex % images.length)];
})

rightBtnNode.addEventListener("click", () =>{
    const imageNode = document.querySelector(".image");
    imageNode.src = images[Math.abs(++imgIndex % images.length)];
})
const imageNode = document.querySelector(".image");
imageNode.src = images[0];
