<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Example: Send email (This requires proper server setup)
    mail('jadmahmoud999@gmail.com', "New message from $name", $message, "From: $email");
    
    echo "Thank you for contacting us!";
}
?>
