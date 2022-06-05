const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(img/${chosenImage})`;
