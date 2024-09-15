document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton de mise à jour avec l'ID 'update'
    const updateButton = document.getElementById('update');
    
    // Sélectionner le corps de la table dans lequel les utilisateurs seront affichés
    const tableBody = document.querySelector('#usersTable tbody');

    // Fonction pour mettre à jour le tableau avec les données des utilisateurs
    function updateTable() {
        // Envoyer une requête pour récupérer les utilisateurs depuis 'users.php'
        fetch('users.php')
            .then(response => response.json()) // Convertir la réponse en format JSON
            .then(users => {
                tableBody.innerHTML = ''; // Vider le tableau avant d'ajouter les nouvelles données
                // Parcourir la liste des utilisateurs et ajouter une ligne pour chaque utilisateur
                users.forEach(user => {
                    const row = tableBody.insertRow(); // Créer une nouvelle ligne dans le tableau
                    row.insertCell(0).textContent = user.id;       // Insérer l'ID de l'utilisateur
                    row.insertCell(1).textContent = user.nom;      // Insérer le nom de l'utilisateur
                    row.insertCell(2).textContent = user.prenom;   // Insérer le prénom de l'utilisateur
                    row.insertCell(3).textContent = user.email;    // Insérer l'email de l'utilisateur
                });
            })
            .catch(error => console.error('Erreur:', error)); // Gérer et afficher les erreurs dans la console
    }

    // Ajouter un écouteur d'événement au bouton pour mettre à jour le tableau lorsque le bouton est cliqué
    updateButton.addEventListener('click', updateTable);

    // Charger les données initiales au chargement de la page
    updateTable();
});
