<?php

    $con = mysql_connect("59.188.255.115","sq_featsky","123456");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("sq_featsky", $con);
    /*============================================================*/

    $num = $_GET['page'];

    $start = $_GET['pageStart'];




    $arr = Array();

    $counts = (int)$start;


    for($i=0;$i<$num;$i++){

        $firstImgResult = mysql_query("SELECT * FROM img order by id desc limit $counts,1");

        @$firstResult = mysql_fetch_object($firstImgResult)->{'time'};

        if(!$firstResult){

        }else{

            $allImgResult = mysql_query("SELECT * FROM img where time ='$firstResult' order by id desc");

            $nums = mysql_num_rows($allImgResult);

            for($j=0;$j<$nums;$j++){

                $allResult = mysql_fetch_object($allImgResult);

                $arr[$i]['data'][$j] = $allResult;

            }

            $counts += $nums;

            $arr[$i]['page'] = $counts;

        }

    }

    $resultObj = $arr;

    //$resultObj['pageNow'] = $counts;





    /*for($i=0;$i<$num;$i++){

        $imgObj = mysql_fetch_object($imgResult);
        //结果集无数据返回
        if(!$imgObj){

            $resultObj[$i]['statusCode'] = 404;

            echo json_encode($resultObj);

            return;

        }else{

            $resultObj[$i]['statusCode'] = 200;

        }


        //$resultObj[$i]['id'] = $imgObj->{'id'};

        //$resultObj[$i]['time'] =  $imgObj->{'time'};

        //$resultObj[$i]['imgPath'] = explode(",",$imgObj->imgPath);

    }*/

        echo json_encode($resultObj);

?>