function rowSumOddNumbers(n) {
    let currentNumber = lastNumber(n) * 2 - 1;
    let sumNumbers = currentNumber;
    for (i = n; i > 1; i--) {
        currentNumber = currentNumber - 2;
        sumNumbers += currentNumber;
    }
    return sumNumbers;
};

function lastNumber(n) {
    return (n == 1) ? n : (n + lastNumber(n - 1));
};
console.log(rowSumOddNumbers(7));