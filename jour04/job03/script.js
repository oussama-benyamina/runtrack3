document.addEventListener('DOMContentLoaded', function() {
    let pokemons = []; // Tableau pour stocker les données Pokémon une fois chargées

    // Charger les données Pokémon à partir du fichier JSON
    fetch('pokemon.json')
        .then(response => response.json()) // Convertir la réponse en objet JSON
        .then(data => {
            pokemons = data; // Stocker les données Pokémon dans la variable 'pokemons'
            populateTypeSelect(pokemons); // Remplir le champ select avec les types de Pokémon
        })
        .catch(error => console.error('Erreur lors du chargement des données:', error)); // Gérer les erreurs de chargement

    // Remplir le select des types de Pokémon en supprimant les doublons
    function populateTypeSelect(pokemons) {
        const typeSelect = document.getElementById('type'); // Sélectionner l'élément select pour les types
        // Extraire les types uniques à partir des Pokémon en utilisant flatMap et Set
        const types = [...new Set(pokemons.flatMap(p => p.type))];
        // Pour chaque type unique, créer une option dans le select
        types.forEach(type => {
            const option = document.createElement('option'); // Créer une balise <option>
            option.value = type; // Définir la valeur de l'option
            option.textContent = type; // Définir le texte visible dans le select
            typeSelect.appendChild(option); // Ajouter l'option au select
        });
    }

    // Gérer le clic sur le bouton "Filtrer" pour filtrer les Pokémon
    document.getElementById('filtrer').addEventListener('click', function() {
        const id = document.getElementById('id').value; // Récupérer la valeur de l'input ID
        const nom = document.getElementById('nom').value.toLowerCase(); // Récupérer et convertir le nom en minuscule
        const type = document.getElementById('type').value; // Récupérer la valeur sélectionnée du type

        // Filtrer les Pokémon en fonction des critères de recherche (id, nom, type)
        const filteredPokemons = pokemons.filter(pokemon => 
            // Vérifier que chaque critère est respecté : soit vide (ignoré), soit correspond à la valeur du Pokémon
            (id === '' || pokemon.id.toString() === id) && // Comparer l'ID si renseigné
            (nom === '' || pokemon.name.french.toLowerCase().includes(nom)) && // Comparer le nom en minuscule
            (type === '' || pokemon.type.includes(type)) // Comparer le type si sélectionné
        );

        displayResults(filteredPokemons); // Afficher les résultats filtrés
    });

    // Fonction pour afficher les Pokémon filtrés
    function displayResults(filteredPokemons) {
        const resultsDiv = document.getElementById('results'); // Sélectionner le div des résultats
        resultsDiv.innerHTML = ''; // Vider les résultats précédents
        // Pour chaque Pokémon filtré, créer et afficher un div avec ses informations
        filteredPokemons.forEach(pokemon => {
            const pokemonDiv = document.createElement('div'); // Créer un nouveau div pour le Pokémon
            // Ajouter les informations du Pokémon dans le div
            pokemonDiv.textContent = `${pokemon.name.french} (ID: ${pokemon.id}, Type: ${pokemon.type.join(', ')})`;
            resultsDiv.appendChild(pokemonDiv); // Ajouter le div au conteneur des résultats
        });
    }
});
