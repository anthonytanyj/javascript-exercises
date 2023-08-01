const sumAll = function(firstNumber, secondNumber) {
    let firstInteger = parseInt(firstNumber);
    let secondInteger = parseInt(secondNumber);
    let finalSum = 0

    for (i=firstInteger; i <= secondInteger; i++) {
        finalSum += i
    }
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
