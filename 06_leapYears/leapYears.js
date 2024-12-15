const leapYears = function(y) {
    if(!y instanceof Number || !Number.isInteger(y))
        return false;
    return y%400 == 0 || (y%4 == 0 && y%100 != 0);
}

// Do not edit below this line
module.exports = leapYears;
