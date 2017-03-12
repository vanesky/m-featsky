<?php

    require('header.php');
    /*============================================================*/

    $num = $_GET['page'];

    $start = $_GET['pageStart'];


    //================================================================================

    function sayList($s,$n){

        //建立返回对象
        $resultObj = Array();

        //列表
        $sayResult = mysql_query("SELECT * FROM say order by id desc limit $s,$n");

        for($i=0;$i<$n;$i++){

            $sayObj = mysql_fetch_object($sayResult);
            //结果集无数据返回
            if(!$sayObj){

                $resultObj[$i]['statusCode'] = 404;

                return $resultObj;

            }else{

                $resultObj[$i]['statusCode'] = 200;

            }

            $resultObj[$i]['id'] =  $sayObj->{'id'};

            $resultObj[$i]['headPath'] =  $sayObj->{'headPath'};

            $resultObj[$i]['time'] =  $sayObj->{'time'};

            $resultObj[$i]['text'] =  $sayObj->{'text'};

            $resultObj[$i]['name'] = $sayObj->{'name'};

            $resultObj[$i]['imgArrPath'] = explode(",",$sayObj->imgArrPath);
        }

        return $resultObj;
    }

    //================================================================================

        echo json_encode(sayList($start,$num));


?>