let chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$&_*";
let password = document.getElementById("password");
let number = document.getElementById("number");

let genPassword = () => {
  let password = "";
  let passLength = number.value;  
  for (let i = 0; i < passLength; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("password").innerHTML = password;
};

let btn = document.getElementById("btn").addEventListener("click", genPassword);
 
