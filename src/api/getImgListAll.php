<?php

    //$con = mysql_connect("localhost","featsky1","123456");

    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("featsky", $con);
    /*============================================================*/

    $num = $_GET['page'];

    $start = $_GET['pageStart'];



    function allList($s,$n){

        $resultObj = Array();

        $imgResult = mysql_query("SELECT * FROM img order by id desc limit $s,$n");

        for($i=0;$i<$n;$i++){

            $imgObj = mysql_fetch_object($imgResult);

            if(!$imgObj){

                $resultObj[$i]['statusCode'] = 404;

                    return $resultObj;

            }else{

                $resultObj[$i]['statusCode'] = 200;

            }

            $resultObj[$i]['id'] =  $imgObj->{'id'};

            $resultObj[$i]['imgPath'] =  $imgObj->{'imgPath'};

            $resultObj[$i]['description'] =  $imgObj->{'description'};

        }

         return $resultObj;
    }


    echo json_encode(allList($start,$num));



?>