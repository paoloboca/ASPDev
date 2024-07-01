"use strict";
/* Levenshtein distance */
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarity = void 0;
/*
La funzione similarity calcola la similarità tra due stringhe confrontando la loro lunghezza e la distanza di editing tra di esse.
 Restituisce un valore compreso tra 0 e 1, dove 1 indica una corrispondenza perfetta e 0 nessuna corrispondenza.

La funzione editDistance calcola la distanza di editing tra due stringhe,
che è il numero minimo di operazioni (inserimento, cancellazione o sostituzione di un singolo carattere)
necessarie per trasformare una stringa nell'altra.
Questo valore viene utilizzato dalla funzione similarity per calcolare la similarità.
*/
function similarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    const longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
exports.similarity = similarity;
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
//# sourceMappingURL=similarity.js.map