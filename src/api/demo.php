<?php


    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());

    }


    /*mysql_select_db("featsky", $con);


    $createTable = "create table vip
    (
    uid int,
    name varchar(15),
    loginName varchar(20),
    loginPass varchar(16),
    headImg varchar(100),
    mark varchar(50)
    )";
    mysql_query($createTable,$con);*/

?>