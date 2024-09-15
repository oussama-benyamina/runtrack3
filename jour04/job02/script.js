// Fonction pour récupérer la valeur d'une clé dans une chaîne JSON
function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        const obj = JSON.parse(jsonString);
        // Retourner la valeur associée à la clé
        return obj[key];
    } catch (error) {
        console.error("Erreur lors du parsing JSON:", error);
        return null;
    }
}

// Test de la fonction
document.addEventListener('DOMContentLoaded', function() {
    const jsonString = `{
        "name": "La Plateforme_",
        "address": "8 rue d'hozier",
        "city": "Marseille",
        "nb_staff": "11",
        "creation": "2019"
    }`;

    const key = "city";
    const result = jsonValueKey(jsonString, key);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `La valeur pour la clé "${key}" est : ${result}`;
});