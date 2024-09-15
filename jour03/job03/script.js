$(document).ready(function() {
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
    
    let currentOrder = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displayTaquin() {
        $('#taquin').empty();
        currentOrder.forEach((img, index) => {
            if (img) {
                $('#taquin').append(`<img src="${img}" class="tile" data-index="${index}" alt="Taquin tile">`);
            } else {
                $('#taquin').append(`<div class="tile empty" data-index="${index}"></div>`);
            }
        });
    }

    function checkWin() {
        if (JSON.stringify(currentOrder) === JSON.stringify(images)) {
            $('#message').text('Vous avez gagné').css('color', 'green');
            $('#restartButton').show();
            $('#taquin').off('click');
        }
    }

    function startGame() {
        currentOrder = [...images];
        do {
            shuffleArray(currentOrder);
        } while (!isSolvable(currentOrder));
        
        displayTaquin();
        $('#message').text('');
        $('#restartButton').hide();
        
        $('#taquin').on('click', '.tile', function() {
            const clickedIndex = $(this).data('index');
            const emptyIndex = currentOrder.indexOf('');
            
            if (isAdjacent(clickedIndex, emptyIndex)) {
                [currentOrder[clickedIndex], currentOrder[emptyIndex]] = [currentOrder[emptyIndex], currentOrder[clickedIndex]];
                displayTaquin();
                checkWin();
            }
        });
    }

    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / 3);
        const col1 = index1 % 3;
        const row2 = Math.floor(index2 / 3);
        const col2 = index2 % 3;
        return (Math.abs(row1 - row2) + Math.abs(col1 - col2)) === 1;
    }

    function isSolvable(puzzle) {
        let inversions = 0;
        const flatPuzzle = puzzle.filter(Boolean); // Enlève la case vide
        for (let i = 0; i < flatPuzzle.length - 1; i++) {
            for (let j = i + 1; j < flatPuzzle.length; j++) {
                if (flatPuzzle[i] > flatPuzzle[j]) {
                    inversions++;
                }
            }
        }
        return inversions % 2 === 0;
    }

    $('#restartButton').click(startGame);

    startGame();
});