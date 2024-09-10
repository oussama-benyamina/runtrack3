// Vérifie si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) return false;
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) return false;
    }
    return true;
}

// Somme des nombres premiers
function sommenombrespremiers(nb1, nb2) {
    if (estPremier(nb1) && estPremier(nb2)) {
        return nb1 + nb2;
    } else {
        return false;
    }
}

// Test de la fonction
console.log(sommenombrespremiers(5, 7)); // 12
console.log(sommenombrespremiers(4, 7)); // false
