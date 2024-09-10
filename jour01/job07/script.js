// Déclare une fonction pour vérifier si un jour est travaillé
function jourtravaille(date) {
    const joursFeries = [
        new Date(2020, 0, 1),   // 1er janvier
        new Date(2020, 3, 13),  // Lundi de Pâques
        new Date(2020, 4, 1),   // Fête du Travail
        // Ajouter tous les jours fériés de 2020 ici
    ];

    let jour = date.getDate();
    let mois = date.getMonth() + 1; // Les mois commencent à 0
    let annee = date.getFullYear();

    // Vérifie si le jour est un jour férié
    for (let i = 0; i < joursFeries.length; i++) {
        if (date.getTime() === joursFeries[i].getTime()) {
            console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
            return;
        }
    }

    // Vérifie si c'est un week-end
    if (date.getDay() === 6 || date.getDay() === 0) {
        console.log(`Non, le ${jour} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, le ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}

// Test de la fonction
let dateTest = new Date(2020, 0, 1);
jourtravaille(dateTest);
