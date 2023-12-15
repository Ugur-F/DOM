//--------------------------------------------------------------------------------------------

// tableau contenant les apprenants 
const learner = ["Ugur Firat", "Noé Anderack", "Alexis P", "Huseyin Sasmaz", "Mathias Hardat", "Nicolas Long"];

// Selection de l'élément 'article'
const articleElement = document.querySelector('article');

// création de l'element 'section'
const nouvelleSection = document.createElement('section');


// Parcourir la liste des apprenants
learner.forEach(nomApprenant => {
    // Créer un paragraphe avec le nom de l'apprenant
    const paragraphe = document.createElement('p');
    paragraphe.textContent = nomApprenant;

    // random color 
    let randH = (Math.floor(Math.random() * 359));

    let randS = (Math.floor(Math.random() * 99));

    let randL = (Math.floor(Math.random() * 99));


    // Appliquer une couleur d'arrière-plan aléatoire à la section
    let Rcolor = `hsl( ${randH}, ${randS}%, ${randL}% )`;
    let lumi = randL;
    // console.log("lumi : " + lumi);

    paragraphe.style.backgroundColor = Rcolor;


    // Ajuster la couleur du texte en fonction de la luminosité
    // paragraphe.style.color = lumi > 50 ? 'black' : 'white';
    if (lumi > 50) {
        paragraphe.style.color = 'black'
    } else {
        paragraphe.style.color = 'white'
    }


    // Ajouter le paragraphe au section
    nouvelleSection.appendChild(paragraphe);
});


// Ajouter la section à l'élément <article>
articleElement.appendChild(nouvelleSection);

// --------------------------------------------------------------------------------------------



