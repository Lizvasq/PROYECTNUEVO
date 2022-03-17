<?php 

//llamando los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//datos para el correo\

$destinatario = "lisevelin1998@gmail.com";
$asunto ="Contacto de nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

//Enviando Mensaje

mail($destinatario, $asunto, $carta); 
?>
