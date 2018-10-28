const input = Number(prompt("Please enter a number to check if prime", "0"));

let n = input - 1;

do {
  if (input % n === 0) {
    alert("Not prime");
    break;
  }
  n--;
} while (n > 1);

if (n === 1) {
  alert("Prime");
}
