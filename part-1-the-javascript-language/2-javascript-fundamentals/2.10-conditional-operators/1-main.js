const response = prompt("What's the official name of JavaScript?");

if (response.localeCompare("ECMAScript", "en", { sensitivity: "base" }) === 0)
  alert("Right!");
else alert("Didn’t know? ECMAScript!");
