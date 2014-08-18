<?php
if(@$_POST["hidden"])
{
	$dt=date("d F Y, H:i:s"); // дата и время
	$mail="emil_mugatarov@mail.ru"; // e-mail куда уйдет письмо
	$title="Бизнес-план под ключ (Заявка)"; // заголовок(тема) письма
	$fnm=$_POST["name"];
	$fnm=htmlspecialchars($fnm); // обрабатываем


	$email="info@fl.ru"; // e-mail откуда письмо

	$phone=$_POST["phone"];
	$name=$_POST["name"];

	$mess.="<b>Имя:</b> $name<br>";
	$mess.="<b>Телефон или почта:</b> $phone<br>";
	$mess.="<br> Форма <b>ЗАКАЗАТЬ ЗВОНОК</b>, отправленна с формы заказа звонка;) (подвал)";

	$headers="MIME-Version: 1.0\r\n";
	$headers.="Content-type: text/html; charset=UTF-8\r\n"; //кодировка
	$headers.="From: Бизнес-план под ключ\r\n"; // откуда письмо (необязательнакя строка)
	mail($mail, $title, $mess, $headers); // отправляем

}
?>