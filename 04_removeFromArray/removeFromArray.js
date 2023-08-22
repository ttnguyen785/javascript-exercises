const removeFromArray = function(array, ...manyMoreArgs) {
    const filtered = array.filter(element => !manyMoreArgs.includes(element));
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
