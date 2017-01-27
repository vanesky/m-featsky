<?php

    $con = mysql_connect("59.188.255.115","sq_featsky","123456");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("sq_featsky", $con);

    $file = $_FILES['fileToUpload'];

    $grid = json_decode($_POST['para']);
    // 中文编码
    $c_name = iconv("UTF-8", "GB2312",$file["name"]);


    move_uploaded_file($file["tmp_name"],"../../img/user/" . $c_name);

    $filename = "../../img/user/" . $c_name;

    /*============================================================*/

    function thumb($filename,$gridObj,$width=200,$height=200){

        $val = '';
        //获取原图像$filename的宽度$width_orig和高度$height_orig
        list($width_orig,$height_orig) = getimagesize($filename);
        //根据参数$width和$height值，换算出等比例缩放的高度和宽度
        /*if ($width && ($width_orig<$height_orig)){

            $width = ($height/$height_orig)*$width_orig;

        }else{

            $height = ($width / $width_orig)*$height_orig;

        }*/

        $sw = $width_orig/$gridObj->{'w'};

        //将原图缩放到这个新创建的图片资源中
        $image_p = imagecreatetruecolor($width, $height);

        preg_match('/.+\.((png)|(jpg))$/',$filename,$matches);

        //获取原图的图像资源
        if($matches[1] == 'png'){

            $image = imagecreatefrompng($filename);

        }else{

            $image = imagecreatefromjpeg($filename);

        }

        //使用imagecopyresampled()函数进行缩放设置
        imagecopyresampled($image_p,$image,0,0,$gridObj->{'x'}*$sw,$gridObj->{'y'}*$sw,$width,$height,$width_orig*$gridObj->{'s'},$width_orig*$gridObj->{'s'});

        //将缩放后的图片$image_p保存，100(质量最佳，文件最大)
        if($matches[1] == 'png'){

            $val = imagepng($image_p,$filename);

        }else{

            $val = imagejpeg($image_p,$filename);
        }

        imagedestroy($image_p);
        imagedestroy($image);

        return $val;
    }

    echo thumb($filename,$grid);

?>