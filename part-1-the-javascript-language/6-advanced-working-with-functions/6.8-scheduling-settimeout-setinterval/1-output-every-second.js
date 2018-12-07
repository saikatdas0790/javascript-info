const printNumbersTimeout = (from, to) => {
  for (let index = from; index <= to; index++)
    setTimeout(() => console.log(index), 1000);
};

const printNumbersInterval = (from, to) => {
  let index = from;
  let intervalID = setInterval(() => {
    if (index <= to) console.log(index++);
    else clearInterval(intervalID);
  }, 1000);
};

// printNumbersTimeout(5, 10);
printNumbersInterval(5, 10);
