// Définition de la fonction showhide
function showhide() {
    // Sélectionne le premier élément <article> présent dans le document
    const existingArticle = document.querySelector('article');
    
    // Vérifie si un élément <article> existe déjà
    if (existingArticle) {
        // Si l'élément <article> existe, il est supprimé du document
        existingArticle.remove();
    } else {
        // Si aucun élément <article> n'existe, crée un nouvel élément <article>
        const article = document.createElement('article');
        
        // Définit le contenu texte de l'élément <article>
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        
        // Ajoute le nouvel élément <article> à la fin du corps du document
        document.body.appendChild(article);
    }
}

// Ajoute un écouteur d'événements au bouton avec l'ID 'button'
// Lorsque le bouton est cliqué, la fonction showhide() est appelée
document.getElementById('button').addEventListener('click', showhide);
