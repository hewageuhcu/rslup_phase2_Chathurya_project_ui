<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Dummy reset link (replace with actual logic to generate a unique link)
    $resetLink = "http://example.com/reset-password?token=abc123";

    // Dummy email sending logic (replace with your actual email sending code)
    $subject = "Password Reset";
    $message = "Hello,\n\nPlease click on the following link to reset your password:\n\n$resetLink";
    $headers = "From: webmaster@example.com";

    if (mail($email, $subject, $message, $headers)) {
        echo "Reset link sent successfully. Check your email.";
    } else {
        echo "Error sending reset link.";
    }
}
?>
