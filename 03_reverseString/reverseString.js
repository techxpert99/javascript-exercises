const reverseString = function(s) {
    let r = [];
    for(let i = s.length-1; i >= 0; i--)
        r.push(s[i]);
    return r.join('');
};

// Do not edit below this line
module.exports = reverseString;
