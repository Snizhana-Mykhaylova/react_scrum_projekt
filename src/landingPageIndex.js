var correctEmail = "abc@abc.com";
var correctPassword = "admin";

function login() {
  try {
    var email = document.querySelector("#form2Example1").value;
    var password = document.querySelector("#form2Example2").value;
    if (email === correctEmail && password === correctPassword) {
      window.open("http://localhost:3000/");
    } else {
      alert("Wrong Password");
    }
  } catch (error) {
    console.log(error);
  }
}
