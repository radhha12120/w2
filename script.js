
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const userData = { name, email, password };

      // Simulated AJAX POST using fetch and localStorage
      fetch("fake-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
      .then(() => {
        // Simulate saving to localStorage (as if server stored it)
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        alert("User registered successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to register user.");
      });
    });
  }
});
