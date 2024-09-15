document.addEventListener('DOMContentLoaded', function() {
    let pokemons = [];

    // Charger les données Pokémon
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            pokemons = data;
            populateTypeSelect(pokemons);
        })
        .catch(error => console.error('Erreur lors du chargement des données:', error));

    // Remplir le select des types
    function populateTypeSelect(pokemons) {
        const typeSelect = document.getElementById('type');
        const types = [...new Set(pokemons.flatMap(p => p.type))];
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });
    }

    // Gérer le clic sur le bouton filtrer
    document.getElementById('filtrer').addEventListener('click', function() {
        const id = document.getElementById('id').value;
        const nom = document.getElementById('nom').value.toLowerCase();
        const type = document.getElementById('type').value;

        const filteredPokemons = pokemons.filter(pokemon => 
            (id === '' || pokemon.id.toString() === id) &&
            (nom === '' || pokemon.name.french.toLowerCase().includes(nom)) &&
            (type === '' || pokemon.type.includes(type))
        );

        displayResults(filteredPokemons);
    });

    // Afficher les résultats
    function displayResults(filteredPokemons) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        filteredPokemons.forEach(pokemon => {
            const pokemonDiv = document.createElement('div');
            pokemonDiv.textContent = `${pokemon.name.french} (ID: ${pokemon.id}, Type: ${pokemon.type.join(', ')})`;
            resultsDiv.appendChild(pokemonDiv);
        });
    }
});