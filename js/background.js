const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg"];

const changeImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${changeImage}`;
document.body.appendChild(bgImage);