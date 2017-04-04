
$(function(){

    var w = JSON.parse(localStorage.getItem('device'));

    $('#art-item').css('height', w.h + 'px');

    //RENDER***********************************************************
    app.ajax('get',app.url('getIndexData.php'),{},function(data){

        var obj = data;

        //banner数据
        $("[data-name='bannerPath']").prop('src',app.imgUrl(obj.bannerPath));

        //计数数据
        var countObj = $('#count');

        for(var i in obj.count){

            countObj.find("[data-name='"+i+"']").text(obj.count[i])

        }

        //相册数据
        var listObj = $('.list-box');

        listObj.css('height',listObj.css('width'));

        for(var j=0;j<obj.imgArrPath.length;j++){

            if(j==0){

                $('#latest').find("[data-name='time']").text(obj.imgArrPath[j].time);

            }

            listObj.eq(j).css('background-image','url('+app.imgUrl('photo/'+obj.imgArrPath[j].imgPath)+')').attr('data-id',obj.imgArrPath[j].id);

        }

        //说说数据sign-text
        var liTextObj = $('#main-sign');

        liTextObj.find("[data-name='text']").text(obj.sayObj.text);

        liTextObj.find("[data-name='time']").text(obj.sayObj.time);

        //文章数据
        var artObj = $('#main-article');

        //artObj.find("[data-name='imgPath']").prop('src','img/'+obj.articleObj.imgPath);

        artObj.find(".checked").attr('data-id',obj.articleObj.id);

        artObj.find("[data-name='imgPath']").css('background-image','url('+app.imgUrl('art/'+obj.articleObj.imgPath)+')');

        artObj.find("[data-name='title']").text(obj.articleObj.title);

        artObj.find("[data-name='text']").text(obj.articleObj.text);  artObj.find("[data-name='text']").text(obj.articleObj.text);

    });

    //OVER**********************************************************************

    //文章查看
    $('.checked').on('tap',function(){

        open('article_detail.html?'+$(this).attr('data-id'),'_self');

    })

    //==========================================================

    //调用图片组件
    var bimObj =  $('.banner-img-main');

    bimObj.bannerMove({

        speed:400,

        second:1

    });

    //页面图片列表事件
    $('.latest-item').on('tap','.list-box',function(){
        //最近|全部
        var pageImgObj = $('.latest-item').find('.list-box');

        com.pageImageEvent(pageImgObj,this,bimObj,$('.banner-img'));

    })

    //下载
    $('.down').on('tap',function(){

        $.alert('将要下载app?',function(){

            window.location = 'http://www.featsky.com/m-featsky/app/featsky.apk';
        })
    })

})