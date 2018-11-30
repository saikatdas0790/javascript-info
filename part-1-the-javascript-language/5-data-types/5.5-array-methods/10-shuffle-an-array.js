let arr = [1, 2, 3];

const randomizer = (a, b) => Math.random() - 0.5;

const shuffle = anArray => {
  anArray.sort(randomizer);
  console.log(anArray);
};

for (let index = 0; index < 10; index++) {
  shuffle(arr);
}
