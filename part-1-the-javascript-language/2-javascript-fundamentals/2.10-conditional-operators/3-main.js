const response = prompt("Who's there?") || "";

if (response.localeCompare("admin", "en", { sensitivity: "base" }) === 0) {
  const password = prompt("Password?") || "";
  if (
    password.localeCompare("TheMaster", "en", { sensitivity: "case" }) === 0
  ) {
    alert("Welcome");
  } else if (password === "") {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (response === "") {
  alert("Cancelled");
} else {
  alert("I don't know you");
}
