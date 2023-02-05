const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpg",
    "4.jpg"

]

const chosenBackgroundImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenBackgroundImg}`;
document.body.appendChild(bgImg);
