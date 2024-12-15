const add = function(x,y) {
  return x+y;
};

const subtract = function(x,y) {
  return x-y;
};

const sum = function() {
  let s = 0;
  for(let arg of arguments) {
    if(Array.isArray(arg))
      for(let e of arg)
        s += e;
    else s += arg;
  }
  return s;
};

const multiply = function() {
  let s = 1;
  for(let arg of arguments) {
    if(Array.isArray(arg))
      for(let e of arg)
        s *= e;
    else s *= arg;
  }
  return s;
};

const power = function(x,y) {
  return x**y;
};

const factorial = function(x) {
  let n = 1;
  for(let i = 2; i <= x; i++)
      n *= i;
  return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
