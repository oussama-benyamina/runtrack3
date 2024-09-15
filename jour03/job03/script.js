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
        'images/image9.png', 
        
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
            $('#taquin').append(`<img src="${img}" class="tile" data-index="${index}" alt="Taquin tile">`);
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
        shuffleArray(currentOrder);
        displayTaquin();
        $('#message').text('');
        $('#restartButton').hide();
        
        $('#taquin').on('click', '.tile', function() {
            const clickedIndex = $(this).data('index');
            const emptyIndex = currentOrder.indexOf('');
            
            if ((Math.abs(clickedIndex - emptyIndex) === 1 && Math.floor(clickedIndex / 3) === Math.floor(emptyIndex / 3)) ||
                Math.abs(clickedIndex - emptyIndex) === 3) {
                [currentOrder[clickedIndex], currentOrder[emptyIndex]] = [currentOrder[emptyIndex], currentOrder[clickedIndex]];
                displayTaquin();
                checkWin();
            }
        });
    }

    $('#restartButton').click(startGame);

    startGame();
});