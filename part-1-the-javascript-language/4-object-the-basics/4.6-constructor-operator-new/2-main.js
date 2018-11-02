function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += Number(prompt("Please enter a number:"));
  };
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values

module.exports = Accumulator;
