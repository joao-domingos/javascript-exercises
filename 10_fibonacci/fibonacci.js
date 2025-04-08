const fibonacci = function(index) {
    index = parseInt(index);
    if (index < 0) return "OOPS";
    else if (index >= 0 && index <= 1) return index;
    else return fibonacci(index - 1) + fibonacci(index - 2);
};



//F(n)=F(n−1)+F(n−2)

// Do not edit below this line
module.exports = fibonacci;
