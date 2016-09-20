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

    //列表
    $imgResult = mysql_query("SELECT * FROM img order by id desc limit $start,$num");

    for($i=0;$i<$num;$i++){

        $imgObj = mysql_fetch_object($imgResult);
        //结果集无数据返回
        if(!$imgObj){

            $resultObj[$i]['statusCode'] = 404;

            echo json_encode($resultObj);

            return;

        }else{

            $resultObj[$i]['statusCode'] = 200;

        }


        $resultObj[$i]['id'] = $imgObj->{'id'};

        $resultObj[$i]['time'] =  $imgObj->{'time'};

        $resultObj[$i]['imgPath'] = explode(",",$imgObj->imgPath);

    }

        echo json_encode($resultObj);

?>