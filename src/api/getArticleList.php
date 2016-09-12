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
    $imgResult = mysql_query("SELECT * FROM article order by id desc limit $start,$num");

    for($i=0;$i<$num;$i++){

        $artObj = mysql_fetch_object($imgResult);
        //结果集无数据返回
        if(!$artObj){

            $resultObj[$i]['statusCode'] = 404;

            echo json_encode($resultObj);

            return;

        }else{

            $resultObj[$i]['statusCode'] = 200;

        }

        $firstImg = explode(",",$artObj->arrImg);

        $resultObj[$i]['id'] = $artObj->{'id'};

        $resultObj[$i]['title'] =  $artObj->{'title'};

        $resultObj[$i]['time'] =  $artObj->{'time'};

        $resultObj[$i]['description'] =  $artObj->{'description'};

        $resultObj[$i]['arrImg'] = $firstImg[0];

    }

    echo json_encode($resultObj);


?>
