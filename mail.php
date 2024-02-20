<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["comment"];

    // Set your email address here
    $to = "olamilekansegun71@gmail.com";

    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/html;charset=UTF-8" . "\r\n";

    $mailContent = "
        <html>
        <head>
            <title>New Form Submission</title>
        </head>
        <body>
            <h2>New Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";

    // Send the email
    mail($to, $subject, $mailContent, $headers);
}
?>
