<?php

    $con = mysql_connect("59.188.255.115","sq_featsky","123456");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("sq_featsky", $con);
    /*============================================================*/

    $id = $_GET['id'];

    $movieResult = mysql_query("SELECT * FROM movie where id = $id");

    $resultObj = mysql_fetch_object($movieResult);

    if(!$resultObj){

        echo 'false';

        return;
    }

    $movieObj['title'] = $resultObj->{'title'};

    $movieObj['time'] = $resultObj->{'time'};

    $movieObj['moviePath'] = $resultObj->{'moviePath'};

    $movieObj['description'] = $resultObj->{'description'};

    echo json_encode($movieObj);



?>