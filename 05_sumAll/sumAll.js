const sumAll = function(a,b) {
    if(! a instanceof Number || ! b instanceof Number || a<0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b))
        return 'ERROR';
    if(b<a) {
        let c = b;
        b = a;
        a = c;
    }
    return ((a+b)*(b-a+1))/2;
};

// Do not edit below this line
module.exports = sumAll;
