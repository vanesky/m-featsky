<?php

    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("featsky", $con);
    /*============================================================*/

    $id = $_GET['id'];

    $artResult = mysql_query("SELECT * FROM article where id = $id");

    $resultObj = mysql_fetch_object($artResult);


    $artObj['title'] = $resultObj->{'title'};

    $artObj['time'] = $resultObj->{'time'};

    $artObj['id'] = $resultObj->{'id'};

    $artObj['author'] = $resultObj->{'author'};

    //preg_match('/(<.+>.+<\/.+>)/U',$resultObj->{'textArr'},$matches);

    //$artObj['text'] = $matches[0];



    echo json_encode($resultObj);


?>