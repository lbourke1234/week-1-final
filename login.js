function validateSignupForm(event) {
  event.preventDefault();
  let mail = document.getElementById("signEmail").value;
  let name = document.getElementById("signName").value;
  let password = document.getElementById("signPassword").value;
  let passwordCheck = document.getElementById("passwordConfirm").value;
  if (password !== passwordCheck) {
    document.getElementById("errorMsg").innerHTML = "Password does not match";
    return false;
  }
  if (mail == "" || name == "" || password == "") {
    document.getElementById("errorMsg").innerHTML =
      "Please fill the required fields";
    return false;
  } else if (password.length < 8) {
    document.getElementById("errorMsg").innerHTML =
      "Your password must include at least 8 characters";
    return false;
  } else {
    // alert("Successfully signed up");
    location.href = "/login.html";
    return true;
  }
}

function validateLoginForm(event) {
  event.preventDefault();
  let loginEmail = document.getElementById("logEmail").value;
  let loginPassword = document.getElementById("logPassword").value;

  if (loginEmail == "" || loginPassword == "") {
    document.getElementById("errorMsg").innerHTML =
      "Please fill the required fields";
    alert("Please fill the required fields");
    return false;
  } else if (loginPassword.length < 8) {
    document.getElementById("errorMsg").innerHTML =
      "Your password must include at least 8 characters";
    alert("Your password must include at least 8 characters");
    return false;
  } else {
    // alert("Successfully logged in");
    location.href = "/homepagefinal.html";
    return true;
  }
}
