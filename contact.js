// Initialize EmailJS with your User ID
emailjs.init("c6fMK7cKe2DOpGncK");

// Function to send an email when the form is submitted
function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Define template parameters
    const templateParams = {
        to_name: "Recipient's Name", // Replace with the recipient's name or use a variable if you have it
        from_name: name, // Use the name entered in the form
        message: message, // Use the message entered in the form
    };

    // Send the email using EmailJS
    emailjs.send("service_rrqigwi", "template_j0017sv", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            // Optionally, you can reset the form here
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(function(error) {
            console.error("Email sending failed:", error);
        });
}

// Attach the sendEmail function to the form's submit event
document.getElementById("btnSubmit").addEventListener("click", sendEmail);
