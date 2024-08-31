const sumAll = function(start, fim) {
    let summ = 0;

    if (
        typeof start !== 'number' || 
        typeof fim !== 'number' ||
        start < 0 ||
        fim < 0 ||
        !Number.isInteger(start) ||
        !Number.isInteger(fim)
    ) {
        return 'ERROR';
    }
    if (start > fim) {
        let aux;
        aux = fim;
        fim = start;
        start = aux;
    }
    while (start < fim + 1) {
        summ += start;
        start++;
    }

    return summ;
};

// Do not edit below this line
module.exports = sumAll;
