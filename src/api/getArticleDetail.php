<?php

    $con = mysql_connect("localhost","featsky1","123456");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("featsky1", $con);
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