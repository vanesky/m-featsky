<?php

    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("featsky", $con);
    /*============================================================*/


    //首页图片
    $imgResult = mysql_query("SELECT * FROM featsky where id=1");
    $imgObj = mysql_fetch_array($imgResult);

    //文章
    $artResult = mysql_query("SELECT * FROM article order by id desc");
    $artNumbers = mysql_num_rows($artResult);
    //前四条相册图片
    $imgResult = mysql_query("SELECT * FROM img order by id desc");
    $imgNumbers = mysql_num_rows($imgResult);
    //影视
    $movieResult = mysql_query("SELECT * FROM movie order by id desc");
    $movieNumbers = mysql_num_rows($movieResult);
    //说说
    $sayResult = mysql_query("SELECT * FROM say order by id desc");
    $sayNumbers = mysql_num_rows($sayResult);


    //首页图片
    $indexObj['bannerPath'] = $imgObj['bannerPath'];

    //建立对象 - 计数器
    $indexCount['artCount'] = $artNumbers;

    $indexCount['movieCount'] = $movieNumbers;

    $indexCount['sayCount'] = $sayNumbers;

    $indexCount['imgCount'] =  $imgNumbers;

    $indexObj['count'] = $indexCount;

    //四条相册路径
    for($i=0;$i<4;$i++){

        $indexObj['imgArrPath'][$i] = mysql_fetch_object($imgResult);

    }
    //说说对象
    $indexObj['sayObj'] = mysql_fetch_object($sayResult);
    //文章对象
    $indexObj['articleObj'] = mysql_fetch_object($artResult);







    echo  json_encode($indexObj);

    //====================================================
    function code($str){

        foreach($str as $key=>$value){

            if(is_array($value)){

                $str[$key] = code($value);

            }else{

                if(preg_match("/[\x7f-\xff]/", $value)){

                    $str[$key] = urlencode($value);

                }else{};

            }

        }

        return $str;
    }

    mysql_close($con);


?>