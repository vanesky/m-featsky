<?php

    $con = mysql_connect("localhost","root","");

    if (!$con){

        die('Could not connect: ' . mysql_error());
    }
    mysql_query("set names utf8", $con);
    mysql_select_db("featsky", $con);

    $file = $_FILES['fileToUpload'];

    // 中文编码
    $c_name = iconv("UTF-8", "GB2312",$file["name"]);

    move_uploaded_file($file["tmp_name"],"../../img/user/" . $c_name);

    $filename = "../../img/user/" . $c_name;

    /*============================================================*/

    function thumb($filename,$width=200,$height=200){

        //获取原图像$filename的宽度$width_orig和高度$height_orig
        list($width_orig,$height_orig) = getimagesize($filename);
        //根据参数$width和$height值，换算出等比例缩放的高度和宽度
        if ($width && ($width_orig<$height_orig)){

            $width = ($height/$height_orig)*$width_orig;

        }else{

            $height = ($width / $width_orig)*$height_orig;

        }

        //将原图缩放到这个新创建的图片资源中
        $image_p = imagecreatetruecolor($width, $height);

        preg_match('/.+\.((png)|(jpg))$/',$filename,$matches);

        //获取原图的图像资源
        if($matches[1] == 'jpg'){

            $image = imagecreatefromjpeg($filename);

        }else if($matches[1] == 'png'){

            $image = imagecreatefrompng($filename);

        }

        //使用imagecopyresampled()函数进行缩放设置
        imagecopyresampled($image_p,$image,0,0,0,0,$width,$height,$width_orig,$height_orig);

        //将缩放后的图片$image_p保存，100(质量最佳，文件最大)
        //imagejpeg($image_p,$filename);
        if($matches[1] == 'jpg'){

            imagejpeg($image_p,$filename);

        }else if($matches[1] == 'png'){

            imagepng($image_p,$filename);
        }

        imagedestroy($image_p);
        imagedestroy($image);
    }

     thumb($filename,100,100);

?>