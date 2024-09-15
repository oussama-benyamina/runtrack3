// Ajoute un écouteur d'événements pour les événements 'keypress' sur le document
document.addEventListener('keypress', function(event) {
    // Vérifie si la touche pressée est une lettre (a-z, insensible à la casse)
    if (event.key.match(/[a-z]/i)) {
        // Sélectionne l'élément <textarea> avec l'ID 'keylogger'
        const keylogger = document.getElementById('keylogger');
        
        // Ajoute la lettre pressée au contenu du <textarea>
        keylogger.value += event.key;
    }
});
