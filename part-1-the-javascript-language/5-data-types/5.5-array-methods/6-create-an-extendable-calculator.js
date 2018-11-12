function Calculator() {
  let methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = str => {
    let split = str.split(" ");
    let a = Number(split[0]);
    let op = split[1];
    let b = Number(split[2]);

    return methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}

module.exports = Calculator;
