<!DOCTYPE html>
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<!--[if IE]>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<![endif]-->
    
	<title></title>
	
	<meta name="keywords" content="" />
	<meta name="description" content="" />

	<!-- dns prefetch -->
	<link href="//www.google-analytics.com" rel="dns-prefetch">
    <link rel="stylesheet" href="css/normalize.min.css">
	<link rel="stylesheet" href="style.css" type="text/css" media="screen, projection" />
	<link rel="stylesheet" href="css/jcarousel.basic.css" type="text/css" media="screen, projection" />
	<link rel="stylesheet" href="css/contact.css" type="text/css" media="screen, projection" />
    
    <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
</head>
<body>
<?php

  $dt=date("d F Y, H:i:s"); // дата и время
  $mail="crazyyy@gmail.com"; // e-mail куда уйдет письмо
  $title="Заказ муки"; // заголовок(тема) письма
  $fnm=$_POST["name"];
  $fnm=htmlspecialchars($fnm); // обрабатываем


  $email="info@fl.ru"; // e-mail откуда письмо

  $phone=$_POST["phone"];
  $weight=$_POST["weight"];
  $city=$_POST["city"];
  $forpos=$_POST["forpos"];

  $mess="<b>Имя:</b> $fnm<br>";
  $mess.="<b>Телефон:</b> $phone<br>";
  $mess.="<br> Если сообщение ниже пустые - форма была отправлена с просьбой перезвонить<br>  <b>Город:</b> $city<br>";
  $mess.="<b>Вес:</b> $weight<br>";

  $headers="MIME-Version: 1.0\r\n";
  $headers.="Content-type: text/html; charset=UTF-8\r\n"; //кодировка
  $headers.="From: Заказ муки\r\n"; // откуда письмо (необязательнакя строка)
  mail($mail, $title, $mess, $headers); // отправляем


?>
</body>
</html>