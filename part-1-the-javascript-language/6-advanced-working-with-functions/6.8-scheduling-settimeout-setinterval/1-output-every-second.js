const printNumbersTimeout = (from, to) => {
  let index = from;
  for (let index = from; index <= to; index++)
    setTimeout(() => {
      if (index <= to) console.log(index++);
      else clearInterval(intervalID);
    }, 1000);
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
