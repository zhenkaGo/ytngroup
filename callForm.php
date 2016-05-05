<?php

if(isset($_POST['number'])){
    $call =mail ("dobryat@gmail.com", "Заказ звонка", "\nИмя: $_POST[name] \nТелефон: $_POST[number]");

}
if(call){
	echo "{status: 'ok'}";
}
?>
