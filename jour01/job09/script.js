// Fonction de tri avec l'option ascendant ou descendant
function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    }
    return numbers;
}

// Test de la fonction
let numbers = [5, 2, 9, 1, 3];
console.log(tri(numbers, "asc"));  // [1, 2, 3, 5, 9]
console.log(tri(numbers, "desc")); // [9, 5, 3, 2, 1]
