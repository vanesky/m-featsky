<?php


    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_select_db("featsky", $con);
    /*============================================================*/


    //首页图片
    $imgResult = mysql_query("SELECT * FROM featsky where id=1");
    $imgObj = mysql_fetch_array($imgResult);

    //获取各个数量
    //文章
    $artResult = mysql_query("SELECT * FROM article");
    $artList = mysql_num_rows($artResult);
    //图片

    //影视
    $movieResult = mysql_query("SELECT * FROM movie");
    $movieList = mysql_num_rows($movieResult);
    //说说
    $sayResult = mysql_query("SELECT * FROM say");
    $sayList = mysql_num_rows($sayResult);

    echo 123;



    mysql_close($con);



?>