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
    $sayResult = mysql_query("SELECT * FROM say order by id desc limit $start,$num");

    for($i=0;$i<$num;$i++){

        $sayObj = mysql_fetch_object($sayResult);
        //结果集无数据返回
        if(!$sayObj){

            $resultObj[$i]['statusCode'] = 404;

            echo json_encode($resultObj);

            return;

        }else{

            $resultObj[$i]['statusCode'] = 200;

        }

        $resultObj[$i]['headSrc'] =  $sayObj->{'headSrc'};

        $resultObj[$i]['time'] =  $sayObj->{'time'};

        $resultObj[$i]['text'] =  $sayObj->{'text'};

        $resultObj[$i]['name'] = $sayObj->{'name'};

        $resultObj[$i]['imgArrPath'] = explode(",",$sayObj->imgArrPath);



    }


        echo json_encode($resultObj);


?>