const palindromes = function (string) {
    const sanitized = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    const reversed = sanitized.split('').reverse().join('');
    
    return sanitized === reversed;
  };

// Do not edit below this line
module.exports = palindromes;
