<?php

    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("featsky", $con);
    /*============================================================*/




    $num = 1;//$_GET['page'];

    $start = 0;//$_GET['pageStart'];


    //返回对象

    $resultObj = Array();

    //列表
    $imgResult = mysql_query("SELECT * FROM article order by id desc limit $start,$num");

    $demo = Array('a'=>1,'b'=>2);

    for($i=0;$i<$num;$i++){

        $artObj = mysql_fetch_object($imgResult);

        $firstImg = explode(",",$artObj->arrImg);

        //$artObj->arrImg = $firstImg[0];

        $resultObj['id'] = $artObj->{'id'};

        $resultObj['title'] =  $artObj->{'title'};

        $resultObj['time'] =  $artObj->{'time'};

        $resultObj['description'] =  $artObj->{'description'};

        $resultObj['arrImg'] = $firstImg[0];

    }

    echo json_encode($resultObj);


?>
