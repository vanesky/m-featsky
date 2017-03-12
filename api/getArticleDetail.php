<?php

    require('header.php');
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