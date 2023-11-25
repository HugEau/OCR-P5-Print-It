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

// Initialisation compteur de slide
let currentSlide = 0;

//  Récupération id des dots, de la bannière, du texte et des flèches
let currentDotSlide = document.getElementById("dot0");
let imageSlide = document.getElementById("bannerImg");
let txtSlide = document.getElementById("pTxt");
let leftArrow = document.getElementById("arrowLeft");
let rightArrow = document.getElementById("arrowRight");

// Fonction de MàJ de la slide (index => n° de la slide à initialiser)
function updateSlide(index) {
    // Modification du dot sélectionné
    currentDotSlide.classList.remove("dot_selected");
    currentDotSlide = document.getElementById("dot" + index);
    currentDotSlide.classList.add("dot_selected");

    // Modification image et texte
    imageSlide.src = "./assets/images/slideshow/" + slides[index].image;
    txtSlide.innerHTML = slides[index].tagLine;
}

// Fontion pour Slide à gauche
function slideLeft() {
    // Contrôle du n° de slide pour définir l'action à faire
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    updateSlide(currentSlide);
}

// Fontion pour Slide à droite
function slideRight() {
    // Contrôle du n° de slide pour définir l'action à faire
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlide(currentSlide);
}


// Event Listener sur les flècles pour Slide
leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);