const findTheOldest = function(P) {
    let oldest = null, oldest_age = 0;
    P.forEach(p => {
        let age = ((p.yearOfDeath == undefined) ? 1970 + Date.now()/(1000*60*60*24*365) : p.yearOfDeath) - p.yearOfBirth;
        if(age > oldest_age) {
            oldest = p;
            oldest_age = age;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
