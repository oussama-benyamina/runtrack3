// Lorsque le document HTML est entièrement chargé et prêt à être manipulé
$(document).ready(function() {

    // Quand le bouton avec l'ID "showButton" est cliqué
    $("#showButton").click(function() {
        // Affiche l'élément avec l'ID "quote" (qui peut être un paragraphe, une citation, etc.)
        $("#quote").show();
    });

    // Quand le bouton avec l'ID "hideButton" est cliqué
    $("#hideButton").click(function() {
        // Cache tout le contenu de la page en masquant l'élément 'body' entier
        $("body").hide();
    });
});
