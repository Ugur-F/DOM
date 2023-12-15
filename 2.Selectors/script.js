// == ajout d'un title attribut a chaque élément contenant la classe "important" ==

// Utiliser querySelectorAll pour récupérer tous les éléments avec la classe "important"
const elementsWithClassImportant = document.querySelectorAll('.important');

// Utiliser forEach pour itérer sur chaque élément
elementsWithClassImportant.forEach(element => {
    // Ajouter l'attribut title avec le texte spécifié
    element.setAttribute('title', 'This is an important item');
});


// == cacher toutes les images sans classe "important" ==

// Sélectionner toutes les balises img
const allImages = document.querySelectorAll('img');

// Parcourir les éléments img
allImages.forEach(img => {
    // Vérifier si l'élément n'a pas la classe "important"
    if (!img.classList.contains('important')) {
        // Modifier la propriété display à "none"
        img.style.display = 'none';
    }
});


// == afficher tous les paragraphes et leurs classes ==

// Sélectionner tous les paragraphes
const allParagraphs = document.querySelectorAll('p');

// Parcourir les éléments de paragraphe
allParagraphs.forEach(paragraph => {
    // Afficher le contenu du paragraphe dans la console
    console.log("----------------------------------");
    console.log("Contenu du paragraphe :", paragraph.textContent);

    // Vérifier si le paragraphe a une classe
    if (paragraph.classList.length > 0) {
        // Afficher le nom de la classe dans la console
        console.log("Nom de la classe :", paragraph.classList[0]);
    }
});



// == couleur aléatoire pour les paragraphe 

// Fonction pour générer une couleur de texte aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Sélectionner tous les paragraphes
const allPara = document.querySelectorAll('p');

// Parcourir les éléments de paragraphe
allPara.forEach(paragraph => {
    // Vérifier si le paragraphe a une classe
    if (paragraph.classList.length === 0) {
        // Donner une couleur de texte aléatoire au paragraphe
        paragraph.style.color = getRandomColor();
    }
});
