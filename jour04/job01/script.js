// Attendre que tout le contenu du document soit complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner l'élément avec l'ID 'button'
    const button = document.getElementById('button');
    
    // Ajouter un gestionnaire d'événement au bouton pour réagir au clic
    button.addEventListener('click', function() {
        // Utiliser l'API Fetch pour charger le fichier 'expression.txt'
        fetch('expression.txt')
            // Quand la réponse arrive, la convertir en texte
            .then(response => response.text())
            // Manipuler les données récupérées (le contenu du fichier texte)
            .then(data => {
                // Créer un nouvel élément <p> pour afficher le texte
                const p = document.createElement('p');
                // Ajouter le texte récupéré dans l'élément <p>
                p.textContent = data;
                // Ajouter cet élément <p> au corps du document
                document.body.appendChild(p);
            })
            // En cas d'erreur (fichier introuvable, problème réseau, etc.), afficher un message d'erreur dans la console
            .catch(error => console.error('Erreur:', error));
    });
});
