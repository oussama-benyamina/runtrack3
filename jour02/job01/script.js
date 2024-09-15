// Définition de la fonction citation
function citation() {
    // Récupère l'élément HTML avec l'ID 'citation'
    const citationElement = document.getElementById('citation');
    
    // Affiche le contenu texte de l'élément 'citation' dans la console du navigateur
    console.log(citationElement.textContent);
}

// Ajoute un écouteur d'événements au bouton avec l'ID 'button'
// Lorsque le bouton est cliqué, la fonction citation() est appelée
document.getElementById('button').addEventListener('click', citation);
