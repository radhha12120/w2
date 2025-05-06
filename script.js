// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        const userData = { name, email, password };
  
        // Simulate AJAX POST (here just pushing to localStorage)
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
  
        alert("User registered successfully!");
  
        form.reset();
      });
    }
  });
  