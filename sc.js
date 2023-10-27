document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");
    const messageContainer = document.getElementById("message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(loginForm);

        fetch("6A.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                console.log("Response status:", response.status);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Data received:", data);
                if (data.success) {
                    showMessage("success", "Login successful!");
                } else {
                    showMessage("error", "Invalid username or password.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                showMessage("error", "An error occurred. Please try again later.");
            });
    });

    function showMessage(type, text) {
        messageContainer.innerHTML = `<div class="${type}">${text}</div>`;
    }
});