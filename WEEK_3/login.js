function checkLogin() {
  var user = document.getElementById("uname").value;
  var pass = document.getElementById("pwd").value;

  if (user == "Varshitha" && pass == "Sairam") {
    alert("Login Successful");
  } else {
    alert("Invalid Username or Password");
  }
}
