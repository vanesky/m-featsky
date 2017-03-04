<?php

    $con = mysql_connect("59.188.255.115","sq_featsky","123456");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("sq_featsky", $con);
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