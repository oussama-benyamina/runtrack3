// Définition de la fonction updateFooterColor
function updateFooterColor() {
    // Obtient la hauteur de la fenêtre visible (viewport)
    const windowHeight = window.innerHeight;
    
    // Obtient la hauteur totale du document (incluant la partie non visible)
    const documentHeight = document.documentElement.scrollHeight;
    
    // Obtient la position actuelle de défilement vertical de la page
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calcule le pourcentage de défilement de la page
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // Sélectionne l'élément <footer> avec l'ID 'footer'
    const footer = document.getElementById('footer');
    
    // Change la couleur de fond du footer en fonction du pourcentage de défilement
    // La couleur passe du rouge pur (255,0,0) au noir (0,0,0) en fonction du défilement
    footer.style.backgroundColor = `rgb(${255 * scrollPercentage / 100}, 0, 0)`;
}

// Ajoute un écouteur d'événements pour les événements 'scroll' sur la fenêtre
// Lorsque la fenêtre est défilée, la fonction updateFooterColor() est appelée
window.addEventListener('scroll', updateFooterColor);
