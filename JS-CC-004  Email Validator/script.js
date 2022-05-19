const email = prompt("Enter your email..");
let extension = email.split(".", 3)[email.split(".", 3).length - 1];
console.log(extension);
if ((extension.length == 2 || extension.length == 3) && email.includes("@")) {
  alert("This email is valid");
} else {
  alert(
    "This email is not valid. (Something is wrong, you forget (@) and Extension length must be equal to 2 or 3)"
  );
}

console.log(email.includes("@"));
