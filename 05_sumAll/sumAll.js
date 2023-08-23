const sumAll = function(num1, num2) {
    let sum = 0
    if (num1 > num2) {
        let temp = num1
        num1 = num2;
        num2 = temp;
    }
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    for (x = num1; x < num2 + 1; x++) {
        sum += x
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
