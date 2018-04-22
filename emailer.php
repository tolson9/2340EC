<?php
$email = $_POST['email'];

$subject = $['subject'];

$msg = $_POST['msg'];

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail($email,"Password Recovery",$msg);
?>