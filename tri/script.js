
function triage(tab) {
    // La boucle for commence à l’index 1 car le premier élément est considéré comme déjà trié.
    for (let i = 1; i < tab.length; i++) {
        // current est l’élément à insérer dans la partie triée du tableau.
        let current = tab[i];
        let j = i - 1;
        // La boucle while compare current avec les éléments de la partie triée et les décale vers la droite jusqu’à ce que la bonne position soit trouvée
        while (j >= 0 && tab[j] > current) {
            tab[j + 1] = tab[j];
            j--;
        }
        tab[j + 1] = current;
    }
    return tab;
}

// Exemple d'utilisation
let tableau = [5, 3, 8, 4, 2];
console.log(triage(tableau)); // Sortie: [2, 3, 4, 5, 8]