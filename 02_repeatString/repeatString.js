const repeatString = function(word, quantity) {
    let palavra = '';
    if (quantity < 0) {
        palavra = 'ERROR'
        return palavra;
    }
    else {
        for (let i = 0; i < quantity; i++) {
            palavra += word;
        }
        return  palavra;
    }
};

// Do not edit below this line
module.exports = repeatString;
