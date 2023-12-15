console.log(document.title);

document.title = "Modifying the DOM";
console.log(document.title);

// document.body.style.backgroundColor = "#FF69B4";

// BG avec la methode RGB
document.body.style.backgroundColor = "rgb(155, 105, 180)";

// affichage des éléments enfant du body
for (let childElement of document.body.children) {
    console.log(childElement);
}

