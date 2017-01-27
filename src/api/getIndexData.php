<?php
    header('Access-Control-Allow-Origin:*');

    $con = mysql_connect("localhost","sq_featsky","123456");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("sq_featsky", $con);
    /*============================================================*/

    //首页图片
    $indexImgResult = mysql_query("SELECT * FROM featsky where name='bannerPath'");
    $imgObj = mysql_fetch_array($indexImgResult);

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
    $indexObj['bannerPath'] = $imgObj['data1'];

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
    $sayObj = mysql_fetch_object($sayResult);
    $indexObj['sayObj']['id'] = $sayObj->{'id'};
    $indexObj['sayObj']['time'] = $sayObj->{'time'};
    $indexObj['sayObj']['text'] = $sayObj->{'text'};

    //文章对象;
    $articleObj = mysql_fetch_object($artResult);

    $indexObj['articleObj']['id'] = $articleObj->{'id'};
    $indexObj['articleObj']['title'] = $articleObj->{'title'};
    $indexObj['articleObj']['time'] = $articleObj->{'time'};

    //第一张图片
    preg_match('/<img.+\"(.+\.(jpg|png)).+>/U',$articleObj->text,$matches);
    $indexObj['articleObj']['imgPath'] = $matches[1];

    //第一句文章
    preg_match('/(<.+>.+<\/.+>)/U',$articleObj->text,$matches);
    $preText = preg_replace('/<.+>(.+)<\/.+>/U','$1',$matches[0]);
    $indexObj['articleObj']['text'] = $preText;

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