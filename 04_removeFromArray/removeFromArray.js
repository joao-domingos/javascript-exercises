const removeFromArray = function(array, ...args) {
    /*
    2/8

    //indexOf localiza o index especificado
    const index = array.indexOf(toRemove);
    //esse if verifica se o index existe
    if (index > -1) {
        //splice remove um argumento especificado quantas vezes forem mandadas
        array.splice(index, 5);
    }
    return array;
    */

    /*
    3/8 
    const elementsToRemove = array.filter(element => element === toRemove);
    const newArray = array.filter(element => !elementsToRemove.includes(element));

    return newArray;
    */

    /*
    1/8

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === args) {
            newArray.push(array[i]);
        }
    }

    return newArray;
    */

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
