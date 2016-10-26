<?php

    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("featsky", $con);
    /*============================================================*/

    $data = $_POST;

    if(!$data['imgPath']||$data['imgPath'] == ''){

        $data['imgPath'] = mt_rand(0,10) . '.jpg';

    }

    $d = date('m-d H:i');

    $sql = "INSERT INTO message (name,time,headPath,text) VALUES('$data[name]','$d','$data[imgPath]','$data[text]')";

    mysql_query($sql);

?>