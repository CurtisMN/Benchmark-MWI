<?php 
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent="Subject: $subject \n Message: $message";
$recipient = "contact@curtisnollner.com";
$subject = "Contact Form - MWI";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Message Sent.";
?>