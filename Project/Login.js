document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username === "Brindha" && password === "12345") {
        message.style.color = "lightgreen";
        message.textContent = "Login successful!";
        window.open("Home.html")
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect username or password.";
    }
});
