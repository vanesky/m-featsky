<?php

    require('header.php');
    /*============================================================*/

    $str = $_GET['str'];

    function searchList($s){

        //建立返回对象
        $resultObj = Array();

        //列表
        $imgResult = mysql_query("SELECT * FROM article where title like '%".$s."%'");

        /*if(mysql_num_rows($imgResult) <= 0){

            $resultObj[0]['statusCode'] = 404;

            return $resultObj;
        }*/

        for($i=0;$i<mysql_num_rows($imgResult);$i++){

            $artObj = mysql_fetch_object($imgResult);

            //结果集无数据返回
            if(!$artObj){

                $resultObj[$i]['statusCode'] = 404;

                break;

            }else{

                $resultObj[$i]['statusCode'] = 200;

            }

            //图片第一个
            preg_match('/<img.+\"(.+\.(jpg|png)).+>/U',$artObj->{'text'},$matches);

            if($matches){

                $resultObj[$i]['imgPath'] = $matches[1];

            }

            //文章第一段
            preg_match('/(<.+>.+<\/.+>)/U',$artObj->text,$matches);

            $preText = preg_replace('/<.+>(.+)<\/.+>/U','$1',$matches[0]);

            $resultObj[$i]['text'] = $preText;

            $resultObj[$i]['id'] = $artObj->{'id'};

            $resultObj[$i]['title'] =  $artObj->{'title'};

            $resultObj[$i]['time'] =  $artObj->{'time'};

        }

        return $resultObj;
    }

    echo json_encode(searchList($str));

?>