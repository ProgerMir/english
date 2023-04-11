<!-- <meta http-equiv='refresh' content='5; url=http:// /'>
<meta charset="UTF-8" /> -->

<?php

    $login = $_POST['username'];
    $email = $_POST['email'];
    $text = $_POST['text'];

    // $formlink = '<a href="./contacts.html">Вернуться на страницу</a>'

    $login = htmlspecialchars($login);
    $email = htmlspecialchars($email);
    $text = htmlspecialchars($text);

    $login = urldecode($login);
    $email = urldecode($email);
    $text = urldecode($text);

    $login = trim($login);
    $email = trim($email);
    $text = trim($text);

    if (mail("improveenglish@mail.ru",
    "Письмо с сайта",
    "Имя: ".$login."\n".
    "Email: ".$email."\n".
    "Сообщение: ".$text."\n".
    "From: no-reply@improveenglish.ru \r\n")
    )
    {
        echo('Письмо успешно отправлено! ');
        echo '<a href="./contacts.html">Вернуться на страницу</a>';
    }
    else{
        echo('Проверьте, пожалуйста, введенные данные. Письмо не отправлено. ');
        echo '<a href="./contacts.html">Вернуться на страницу</a>';
    }


?>

