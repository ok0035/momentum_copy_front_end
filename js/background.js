const images = ["0.jpg", "1.jpg", "2.jpg"];
chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.dir(document.body);
document.body.background = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
