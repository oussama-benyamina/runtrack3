// Fonction pour récupérer la valeur associée à une clé donnée dans une chaîne JSON
function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en un objet JavaScript
        const obj = JSON.parse(jsonString);
        // Retourner la valeur associée à la clé passée en paramètre
        return obj[key];
    } catch (error) {
        // Si une erreur survient lors de la conversion JSON, afficher l'erreur dans la console
        console.error("Erreur lors du parsing JSON:", error);
        // Retourner null si une erreur s'est produite
        return null;
    }
}

// Une fois que le document est entièrement chargé, exécuter cette fonction
document.addEventListener('DOMContentLoaded', function() {
    // Chaîne JSON contenant les informations d'une entité (par exemple, une organisation)
    const jsonString = `{
        "name": "La Plateforme_",
        "address": "8 rue d'hozier",
        "city": "Marseille",
        "nb_staff": "11",
        "creation": "2019"
    }`;

    // Clé que nous voulons récupérer à partir du JSON (ici "city")
    const key = "city";
    
    // Appeler la fonction jsonValueKey pour obtenir la valeur associée à la clé
    const result = jsonValueKey(jsonString, key);

    // Sélectionner l'élément dans lequel afficher le résultat
    const resultDiv = document.getElementById('result');
    
    // Afficher la valeur récupérée dans le div avec l'ID 'result'
    resultDiv.textContent = `La valeur pour la clé "${key}" est : ${result}`;
});
