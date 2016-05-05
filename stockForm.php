<?php

if(isset($_POST['email'])){
    $stock =mail ("dobryat@gmail.com", "Заявка - Акция", "\nИмя: $_POST[name] \nПочта: $_POST[email] \nТелефон: $_POST[number] \nСайт: $_POST[site]");

}
if(stock){
	echo "{status: 'ok'}";
}
?>
