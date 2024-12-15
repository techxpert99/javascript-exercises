const repeatString = function(s,n) {
    if(n < 0) return 'ERROR';
    let x = [];
    for(let i=0;i<n;i++)
        x.push(s);
    return x.join('');
};

// Do not edit below this line
module.exports = repeatString;
