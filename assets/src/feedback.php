<?
if ($_POST) {
    
    $name = clean($_POST['name']);
    $phone = clean($_POST['phone']);
    
    if(!empty($name) && !empty($phone)) {

        $date = date('Y-m-d H:i:s');
        $string = $date.';'.$name.';'.$phone.';';
        $f = fopen('feedback.txt', 'a');
        fwrite($f, $string . PHP_EOL);
        fclose($f);

        mail(
        "s.murashko@toy.ru", //<== шлем сюды
        "Заявка с сайта warehouses.saks.ru",
        "Имя: ".$name.PHP_EOL.
        "Телефон: ".$phone.PHP_EOL.
        "From: warehouses@shop.toy.ru \r\n");
        
        echo "Заявка отправлена";

    }
    else {
        echo "Заполните все необходимые поля. Форма не отправлена";
    };

}

function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}

?>