$(document).ready(function() {
    const images = [
        'images/arc1.png', 
        'images/arc2.png', 
        'images/arc3.png', 
        'images/arc4.png', 
        'images/arc5.png', 
        'images/arc6.png'
    ];
    
    let shuffled = [...images];

    function displayImages() {
        $('#container').empty();
        shuffled.forEach(img => {
            $('#container').append(`<img src="${img}" alt="Arc-en-ciel partie">`);
        });
    }

    function checkOrder() {
        const currentOrder = $('#container img').map(function() {
            return $(this).attr('src');
        }).get();
        
        if (JSON.stringify(currentOrder) === JSON.stringify(images)) {
            $('#message').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#message').text('Vous avez perdu').css('color', 'red');
        }
    }

    $('#shuffleButton').click(function() {
        shuffled = shuffled.sort(() => Math.random() - 0.5);
        displayImages();
    });

    $('#container').on('click', 'img', function() {
        const clickedIndex = $(this).index();
        const emptyIndex = $('#container img[src=""]').index();
        
        if (Math.abs(clickedIndex - emptyIndex) === 1 || Math.abs(clickedIndex - emptyIndex) === 3) {
            const temp = shuffled[clickedIndex];
            shuffled[clickedIndex] = shuffled[emptyIndex];
            shuffled[emptyIndex] = temp;
            displayImages();
            checkOrder();
        }
    });

    displayImages();
});