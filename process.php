<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create email headers
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Your email address where you want to receive the form submissions
    $to = "lasithdissanayake99@gmail.com"; // Replace with your email address

    // Send the email
    $subject = "New Contact Form Submission from $name";
    mail($to, $subject, $message, $headers);

    // Redirect back to your thank-you page or homepage
    header("Location: contact.html"); // Replace with your thank-you page URL
} else {
    // Handle form submission error
    echo "Form submission failed. Please try again.";
}
?>
