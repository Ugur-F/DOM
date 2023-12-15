document.addEventListener("DOMContentLoaded", function() {

    // Sélectionnez le dernier enfant de la balise <ol>
    var ol = document.querySelector('ol');
    var lastLi = ol.lastElementChild;
  
    // Sélectionnez le premier enfant de la balise <ol>
    var firstLi = ol.firstElementChild;
  
    // Déplacez le dernier enfant au début de la liste
    ol.insertBefore(lastLi, firstLi);
  
    //==========================================================================

    // Sélectionnez le <h2> de la deuxième section
    var h2SecondSection = document.querySelector('section:nth-child(2) h2');
  
    // Sélectionnez le <h2> de la troisième section
    var h2ThirdSection = document.querySelector('section:nth-child(3) h2');
  
    // Déplacez les <h2> entre les sections
    var secondSection = document.querySelector('section:nth-child(2)');
    secondSection.insertBefore(h2ThirdSection, secondSection.firstChild);
  
    var thirdSection = document.querySelector('section:nth-child(3)');
    thirdSection.insertBefore(h2SecondSection, thirdSection.firstChild);
  
    //==========================================================================

    // Sélectionnez et supprimez la dernière section du DOM
    var lastSection = document.querySelector('main section:last-child');
    lastSection.remove();

  });
  
