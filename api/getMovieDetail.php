<?php

    require('header.php');
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