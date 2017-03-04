<?php

    $con = mysql_connect("59.188.255.115","sq_featsky","123456");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("sq_featsky", $con);
    /*============================================================*/

    $id = $_GET['id'];

    $artResult = mysql_query("SELECT * FROM article where id = $id");

    $resultObj = mysql_fetch_object($artResult);

    if(!$resultObj){

        echo 'false';

    }else{

        echo json_encode($resultObj);

    }

?>