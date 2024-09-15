$(document).ready(function() {
    // Tableau d'images représentant les pièces du puzzle (le dernier élément est une case vide)
    const images = [
        'images/image1.png', 
        'images/image2.png', 
        'images/image3.png', 
        'images/image4.png', 
        'images/image5.png', 
        'images/image6.png', 
        'images/image7.png', 
        'images/image8.png',
        '' // La case vide
    ];
    
    // Variable pour stocker l'ordre actuel des pièces du puzzle
    let currentOrder = [];

    // Fonction pour mélanger un tableau (utilisée pour mélanger le puzzle)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
        }
    }

    // Fonction pour afficher les pièces du puzzle dans le conteneur #taquin
    function displayTaquin() {
        $('#taquin').empty(); // Vider le conteneur avant d'afficher les pièces
        currentOrder.forEach((img, index) => {
            if (img) {
                // Si l'élément n'est pas vide, afficher l'image
                $('#taquin').append(`<img src="${img}" class="tile" data-index="${index}" alt="Taquin tile">`);
            } else {
                // Si l'élément est la case vide, afficher un div vide
                $('#taquin').append(`<div class="tile empty" data-index="${index}"></div>`);
            }
        });
    }

    // Fonction pour vérifier si l'utilisateur a gagné (les pièces sont dans le bon ordre)
    function checkWin() {
        if (JSON.stringify(currentOrder) === JSON.stringify(images)) {
            // Si l'ordre actuel des pièces correspond à l'ordre correct, afficher un message de victoire
            $('#message').text('Vous avez gagné').css('color', 'green');
            // Montrer le bouton de redémarrage et désactiver le clic sur les pièces du puzzle
            $('#restartButton').show();
            $('#taquin').off('click');
        }
    }

    // Fonction pour initialiser et démarrer une nouvelle partie
    function startGame() {
        currentOrder = [...images]; // Copier l'ordre initial des images
        do {
            shuffleArray(currentOrder); // Mélanger les pièces du puzzle
        } while (!isSolvable(currentOrder)); // Recommencer si le puzzle n'est pas solvable
        
        displayTaquin(); // Afficher les pièces mélangées
        $('#message').text(''); // Réinitialiser le message de jeu
        $('#restartButton').hide(); // Cacher le bouton de redémarrage
        
        // Activer le clic sur les pièces du puzzle
        $('#taquin').on('click', '.tile', function() {
            const clickedIndex = $(this).data('index'); // Obtenir l'index de la pièce cliquée
            const emptyIndex = currentOrder.indexOf(''); // Obtenir l'index de la case vide
            
            if (isAdjacent(clickedIndex, emptyIndex)) {
                // Si la pièce cliquée est adjacente à la case vide, échanger les deux
                [currentOrder[clickedIndex], currentOrder[emptyIndex]] = [currentOrder[emptyIndex], currentOrder[clickedIndex]];
                displayTaquin(); // Réafficher les pièces après l'échange
                checkWin(); // Vérifier si l'utilisateur a gagné après l'échange
            }
        });
    }

    // Fonction pour vérifier si deux index sont adjacents (peuvent être échangés)
    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / 3); // Calculer la ligne de l'index 1
        const col1 = index1 % 3; // Calculer la colonne de l'index 1
        const row2 = Math.floor(index2 / 3); // Calculer la ligne de l'index 2
        const col2 = index2 % 3; // Calculer la colonne de l'index 2
        return (Math.abs(row1 - row2) + Math.abs(col1 - col2)) === 1; // Vérifier si les pièces sont adjacentes
    }

    // Fonction pour vérifier si un puzzle est solvable
    function isSolvable(puzzle) {
        let inversions = 0;
        const flatPuzzle = puzzle.filter(Boolean); // Enlever la case vide pour compter les inversions
        for (let i = 0; i < flatPuzzle.length - 1; i++) {
            for (let j = i + 1; j < flatPuzzle.length; j++) {
                if (flatPuzzle[i] > flatPuzzle[j]) {
                    inversions++; // Compter les inversions (paires dans le mauvais ordre)
                }
            }
        }
        return inversions % 2 === 0; // Un puzzle est solvable si le nombre d'inversions est pair
    }

    // Gestionnaire d'événement pour redémarrer le jeu quand on clique sur le bouton de redémarrage
    $('#restartButton').click(startGame);

    // Démarrer une nouvelle partie lorsque la page est chargée
    startGame();
});
