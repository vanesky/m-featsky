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
    $mesResult = mysql_query("SELECT * FROM message order by id desc limit $start,$num");


    for($i=0;$i<$num;$i++){

        $mesObj = mysql_fetch_object($mesResult);
        //结果集无数据返回
        if(!$mesObj){

            $resultObj[$i]['statusCode'] = 404;

            echo json_encode($resultObj);

            return;

        }else{

            $resultObj[$i]['statusCode'] = 200;

        }

        $resultObj[$i]['headSrc'] =  $mesObj->{'headSrc'};

        $resultObj[$i]['time'] =  $mesObj->{'time'};

        $resultObj[$i]['text'] =  $mesObj->{'text'};

        $resultObj[$i]['name'] = $mesObj->{'name'};

    }


        echo json_encode($resultObj);



?>
















