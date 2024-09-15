// Déclaration du code Konami en tant que séquence de touches à détecter
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;  // Indice pour suivre la progression du code Konami

// Ajoute un écouteur d'événements pour les frappes de touches (keydown)
document.addEventListener('keydown', (e) => {
    // Vérifie si la touche pressée correspond à la touche attendue du code Konami
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;  // Passe à la touche suivante du code Konami
        // Vérifie si la séquence complète du code Konami a été saisie
        if (konamiIndex === konamiCode.length) {
            activateKonami();  // Active l'effet Konami si le code est complet
        }
    } else {
        // Réinitialise l'indice si la touche pressée ne correspond pas à la touche attendue
        konamiIndex = 0;
    }
});

// Fonction qui applique des changements de style et ajoute un message après la saisie du code Konami
function activateKonami() {
    // Sélectionne l'élément <style> avec l'ID 'konami-style'
    const style = document.getElementById('konami-style');
    // Applique des styles au corps du document et aux titres
    style.textContent = `
        body {
            background-color: #0065FC;  // Change la couleur de fond du corps
            color: white;               // Change la couleur du texte
            font-family: Arial, sans-serif;  // Change la police du texte
        }
        h1 {
            color: #FFCC00;             // Change la couleur du texte des titres
        }
    `;
    
    // Crée un nouvel élément <h1> pour afficher un message
    const h1 = document.createElement('h1');
    h1.textContent = 'La Plateforme_';  // Définit le texte du titre
    document.body.appendChild(h1);  // Ajoute le titre au corps du document
}
