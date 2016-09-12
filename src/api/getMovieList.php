<?php

    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("featsky", $con);
    /*============================================================*/



    $num = $_GET['page'];

    $start = $_GET['pageStart'];

    //建立返回对象
    $resultObj = Array();

    //列表
    $movieResult = mysql_query("SELECT * FROM movie order by id desc limit $start,$num");

    for($i=0;$i<$num;$i++){

        $movieObj = mysql_fetch_object($movieResult);
        //结果集无数据返回
        if(!$movieObj){

            $resultObj[$i]['statusCode'] = 404;

            echo json_encode($resultObj);

            return;

        }else{

            $resultObj[$i]['statusCode'] = 200;

        }

        $resultObj[$i]['id'] = $movieObj->{'id'};

        $resultObj[$i]['title'] =  $movieObj->{'title'};

        $resultObj[$i]['time'] =  $movieObj->{'time'};

        $resultObj[$i]['description'] =  $movieObj->{'description'};

        $resultObj[$i]['imgSrc'] = $movieObj->{'imgSrc'};

    }

    echo json_encode($resultObj);






?>