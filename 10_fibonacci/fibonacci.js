const fibonacci = function(n) {
    n = +n;
    if(n < 0)
        return "OOPS";
    let f = [0,1];
    for(let i = 2; i <= n; i++)
        f[i&1] = f[(i-1)&1] + f[(i-2)&1];
    return f[n&1];
};

// Do not edit below this line
module.exports = fibonacci;
