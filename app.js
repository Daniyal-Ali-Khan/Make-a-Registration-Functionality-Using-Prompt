let userName = prompt("Enter your username:");
if (userName === "") {
  alert("Error: Please enter your username.");
} else {
  let phoneNumber = prompt("Enter your phone number:");
  if (phoneNumber === "") {
    alert("Error: Please enter your phone number.");
  } else {
    let email = prompt("Enter your email address:");
    if (email === "") {
      alert("Error: Please enter your email address.");
    } else {
      let password = prompt("Enter your password:");
      if (password === "") {
        alert("Error: Please enter your password.");
      } else {
        let confirmPassword = prompt("Confirm your password:");
        if (confirmPassword === "") {
          alert("Error: Please confirm your password.");
        } else if (password !== confirmPassword) {
          alert("Error: Passwords do not match.");
        } else {
          alert("You have successfully registered!");
        }
      }
    }
  }
}
