// Initialise la variable count à 0
let count = 0;

// Définition de la fonction addone
function addone() {
    // Incrémente la variable count de 1
    count++;
    
    // Met à jour le contenu texte de l'élément avec l'ID 'compteur' pour afficher la nouvelle valeur de count
    document.getElementById('compteur').textContent = count;
}

// Ajoute un écouteur d'événements au bouton avec l'ID 'button'
// Lorsque le bouton est cliqué, la fonction addone() est appelée
document.getElementById('button').addEventListener('click', addone);
