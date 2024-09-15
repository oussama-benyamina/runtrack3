document.addEventListener('DOMContentLoaded', function() {
    const updateButton = document.getElementById('update');
    const tableBody = document.querySelector('#usersTable tbody');

    function updateTable() {
        fetch('users.php')
            .then(response => response.json())
            .then(users => {
                tableBody.innerHTML = ''; // Vider le tableau
                users.forEach(user => {
                    const row = tableBody.insertRow();
                    row.insertCell(0).textContent = user.id;
                    row.insertCell(1).textContent = user.nom;
                    row.insertCell(2).textContent = user.prenom;
                    row.insertCell(3).textContent = user.email;
                });
            })
            .catch(error => console.error('Erreur:', error));
    }

    updateButton.addEventListener('click', updateTable);

    // Charger les données initiales
    updateTable();
});