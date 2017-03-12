<?php

    require('header.php');
    /*============================================================*/

    $data = $_POST;

    if(!$data['imgPath']||$data['imgPath'] == ''){

        $data['imgPath'] = mt_rand(0,10) . '.jpg';

    }

    $d = date('m-d H:i',time()+60*60*8);

    $sql = "INSERT INTO message (name,time,headPath,text) VALUES('$data[name]','$d','$data[imgPath]','$data[text]')";

    if(!$back = mysql_query($sql,$con)){

        die('Error: ' . mysql_error());

    };

    echo $back;

    mysql_close($con);

?>