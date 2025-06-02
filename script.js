function register() {
  const phone = document.getElementById("regPhone").value;
  const pass = document.getElementById("regPass").value;
  if (!phone || !pass) return alert("Please fill in both fields");
  localStorage.setItem("userPhone", phone);
  localStorage.setItem("userPass", pass);
  alert("Registered successfully!");
  window.location.href = "login.html";
}

function login() {
  const phone = document.getElementById("loginPhone").value;
  const pass = document.getElementById("loginPass").value;
  const storedPhone = localStorage.getItem("userPhone");
  const storedPass = localStorage.getItem("userPass");

  if (phone === storedPhone && pass === storedPass) {
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials");
  }
}