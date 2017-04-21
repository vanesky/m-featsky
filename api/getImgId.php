<?php

    require('header.php');
    /*============================================================*/

    $id = $_GET['id'];

    $imgResult = mysql_query("SELECT * FROM img where id = $id");

    $resultObj = mysql_fetch_object($imgResult);

    if(!$resultObj){

        echo 'false';

        return;
    }


    $num = mysql_query("SELECT * FROM img order by id desc");

    $imgNumbers = mysql_num_rows($num);


    $obj['id'] = $resultObj->{'id'};

    $obj['imgPath'] = $resultObj->{'imgPath'};

    $obj['description'] = $resultObj->{'description'};

    $obj['num'] = $imgNumbers;

    echo json_encode($obj);



?>