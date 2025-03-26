document.getElementById("joinBtn").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none"; // Hide the button
    document.getElementById("newsletterForm").style.display = "block"; // Show form
});

function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        from_email: document.getElementById("email_id").value
    };

    emailjs.send("service_ibfhriu", "template_26ggsdc", params)
        .then(function(response) {
            document.getElementById("message").innerText = "Subscription successful! Check your email.";
            document.getElementById("message").style.color = "green";
        })
        .catch(function(error) {
            document.getElementById("message").innerText = "Error sending email. Please try again.";
            document.getElementById("message").style.color = "red";
        });
}
