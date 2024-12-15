const removeFromArray = function(a) {
    let b = new Set(Array.prototype.slice.call(arguments,1));
    return a.filter(y => !b.has(y));
};

// Do not edit below this line
module.exports = removeFromArray;