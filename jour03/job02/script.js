$(document).ready(function() {
    // Tableau contenant les chemins des images qui forment les différentes parties d'un arc-en-ciel
    const images = [
        'images/arc1.png', 
        'images/arc2.png', 
        'images/arc3.png', 
        'images/arc4.png', 
        'images/arc5.png', 
        'images/arc6.png'
    ];
    
    // Crée une copie du tableau d'images que l'on peut mélanger
    let shuffled = [...images];

    // Fonction pour afficher les images mélangées dans le conteneur #melange
    function displayImages() {
        // Vide le conteneur #melange avant d'ajouter les nouvelles images
        $('#melange').empty();
        // Pour chaque image dans le tableau "shuffled", ajouter l'image dans le conteneur
        shuffled.forEach(img => {
            $('#melange').append(`<img src="${img}" alt="Arc-en-ciel partie">`);
        });
    }

    // Fonction pour vérifier si les images dans #ordre sont dans le bon ordre
    function checkOrder() {
        // Récupère l'ordre actuel des images dans le conteneur #ordre
        const currentOrder = $('#ordre img').map(function() {
            return $(this).attr('src');
        }).get();
        
        // Vérifie si l'ordre des images dans #ordre correspond à l'ordre correct (le tableau "images")
        if (JSON.stringify(currentOrder) === JSON.stringify(images)) {
            // Si les images sont dans le bon ordre, afficher un message de victoire
            $('#message').text('Vous avez gagné').css('color', 'green');
        } else if (currentOrder.length === images.length) {
            // Si toutes les images sont présentes mais dans le mauvais ordre, afficher un message de défaite
            $('#message').text('Vous avez perdu').css('color', 'red');
        } else {
            // Si l'utilisateur n'a pas encore terminé, efface le message
            $('#message').text('');
        }
    }

    // Gestionnaire d'événement pour le bouton de mélange
    $('#shuffleButton').click(function() {
        // Mélanger aléatoirement le tableau "shuffled" (en créant une nouvelle copie de "images")
        shuffled = [...images].sort(() => Math.random() - 0.5);
        // Affiche les images mélangées dans le conteneur #melange
        displayImages();
        // Vide le conteneur #ordre pour permettre à l'utilisateur de recommencer
        $('#ordre').empty();
        // Efface les messages précédents
        $('#message').text('');
    });

    // Gestionnaire d'événement pour déplacer une image d'un conteneur à l'autre
    $('#melange, #ordre').on('click', 'img', function() {
        // Vérifie dans quel conteneur se trouve l'image cliquée (soit #melange, soit #ordre)
        const targetContainer = $(this).parent().attr('id') === 'melange' ? '#ordre' : '#melange';
        // Déplace l'image cliquée vers le conteneur cible
        $(this).appendTo(targetContainer);
        // Vérifie si l'ordre des images dans #ordre est correct
        checkOrder();
    });

    // Affiche les images initialement (mélangées) dans le conteneur #melange lors du chargement de la page
    displayImages();
});
