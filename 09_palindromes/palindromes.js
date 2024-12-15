const palindromes = function (s) {
    let i = 0, j = s.length - 1;
    let puncs = [' ', '.', ',','!'];
    while(i < j) {
        if(puncs.includes(s[i])) {
            i++;
            continue;
        }
        if(puncs.includes(s[j])) {
            j--;
            continue;
        }
        if(s[i].toLowerCase() != s[j].toLowerCase())
            return false;
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
