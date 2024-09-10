// Déclare une fonction pour vérifier si une année est bisextile
function bisextile(annee) {
    // Une année est bisextile si elle est divisible par 4 mais non divisible par 100,
    // ou bien si elle est divisible par 400
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test de la fonction
console.log(bisextile(2020)); // true
console.log(bisextile(2021)); // false
