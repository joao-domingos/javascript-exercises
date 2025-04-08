const findTheOldest = function(array) {
    //array só com idades
    const anoAtual = new Date().getFullYear();
    let howOld =  array.map(person => person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : anoAtual - person.yearOfBirth);
    //index da pessoa mais velha
    const oldest = howOld.indexOf(Math.max(...howOld));
    return array[oldest];

};

// Do not edit below this line
module.exports = findTheOldest;
