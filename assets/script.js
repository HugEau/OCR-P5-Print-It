const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;
let currentDotSlide = document.getElementById("dot0");
let imageSlide = document.getElementById("bannerImg");
let txtSlide = document.getElementById("pTxt");
let leftArrow = document.getElementById("arrowLeft");
let rightArrow = document.getElementById("arrowRight");

function updateSlide(index) {
    currentDotSlide.classList.remove("dot_selected");
    currentDotSlide = document.getElementById("dot" + index);
    currentDotSlide.classList.add("dot_selected");

    imageSlide.src = "./assets/images/slideshow/" + slides[index].image;
    txtSlide.innerHTML = slides[index].tagLine;
}

function slideLeft() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    updateSlide(currentSlide);
}

function slideRight() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlide(currentSlide);
}

leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);