<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Filtre Pokémon</title>
</head>
<body>
    <h1>Filtre Pokémon</h1>
    <form id="pokemonFilter">
        <input type="text" id="id" placeholder="ID">
        <input type="text" id="nom" placeholder="Nom">
        <select id="type">
            <option value="">Tous les types</option>
            <!-- Les options seront ajoutées dynamiquement en JavaScript -->
        </select>
        <input type="button" id="filtrer" value="Filtrer">
    </form>
    <div id="results"></div>
    <script src="script.js"></script>
</body>
</html>