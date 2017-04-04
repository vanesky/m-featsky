
$(function(){

    var pageResult = 0,pageCount = 2,w = $(window).width();

    var latestObj = $('#channel-latest'),allObj = $('#channel-all');

    //默认进入最近模块
    renderImg();

    //图片渲染
    function renderImg(){

        //图片间隔宽度
        imgListWidth(2,3);

        app.ajax('get',app.url('getImgList.php'),{page:pageCount,pageStart:pageResult},function(data){

            var obj = data,str = '',page = '';

            var model = $('#model-1').clone();

            var imgListModel = $("#model-1-a").clone();

            for(var i=0;i<obj.length;i++){

                var imgStr = '';

                if(obj[i].statusCode == 404){continue;}

                for(var j=0;j<obj[i].data.length;j++){

                    //时间
                    model.find("[data-name='time']").text(obj[i].data[j].time);

                    imgListModel.find('.img-list').css('background-image',"url("+app.imgUrl('photo/'+obj[i].data[j].imgPath)+")").attr('data-id',obj[i].data[j].id);

                    imgStr += imgListModel.html();
                }

                //向内存中的dom模板插入图片数列表
                model.find("[data-name='imgPath']").html(imgStr);

                for(var k=0;k<model.find('.img-list').length;k++){

                    if(k%3!=0){ model.find('.img-list').eq(k).css('margin-left',2 + 'px') }

                }

                //保存对象列表字符串到变量
                str +=  model.html();

                page = obj[i].page;
            }

            if(str == ''){

                $.comMessage({

                    type:'prompt',

                    text:'最近只有这些哦!',

                    time:3000,

                    animateTop:'80px'
                })

                return;

            }else{

                latestObj.append(str);
            }

            return pageResult =  page;
        })
    }

    //==================================================================

    //图片大小和边距
    function imgListWidth(param,num){

        var liw = (w-param*(num-1))/num - 0.1;

        $('#model-1-a').find('.img-list').css({

            width:liw + 'px',

            height:liw + 'px',

        });
    }

    //边距(分别获取设置边距)
    function imgListLeft(obj,param){

        for(var i=0;i<obj.length;i++){

            if(i%3!=0){ obj.eq(i).css('margin-left',param + 'px') }

        }
    }

    //初始化页面
    function initPage(n){

        pageCount = 2;

        pageResult = 0;

        pagesCount = 9;

        pagesResult = 0;

        n == 0 ?  latestObj.html('') : allObj.children("[data-name='imgPath']").html('');

    }

    //二级页面===========================================================

    //调用图片组件
    var bimObj =  $('.banner-img-main');

    bimObj.bannerMove({

        speed:400,

        second:1

    });

    //页面图片列表事件
    function pageEventTap(obj){

        obj.on('tap','.img-list',function(){

            //最近|全部
            var pageImgObj = obj.find('.img-list');

            com.pageImageEvent(pageImgObj,this,bimObj)

        })
    }

    pageEventTap(latestObj);

    pageEventTap(allObj);


    //全部模块********************************************************

    var pagesResult = 0,pagesCount = 9;

    function renderAllImg(){

        imgListWidth(2,3)

        app.ajax('get',app.url('getImgListAll.php'),{page:pagesCount,pageStart:pagesResult},function(data){

            var obj = data,imgStr='';

            var imgListModel = $("#model-1-a").clone();

            for(var i=0;i<obj.length;i++){

                if(obj[i].statusCode == 404){continue;}

                imgListModel.find('.img-list').css('margin-left','');

                imgListModel.find('.img-list').css('background-image',"url("+app.imgUrl('photo/'+obj[i].imgPath)+")").attr('data-id',obj[i].id);

                if(i%3!=0){ imgListModel.find('.img-list').css('margin-left',2 + 'px') }

                imgStr += imgListModel.html();

            }

            if(imgStr == ''){

                $.comMessage({

                    type:'prompt',

                    text:'最近只有这些哦!',

                    time:3000,

                    animateTop:'80px'
                })

            }else{

                //将变量字符串插入真实dom
                allObj.children("[data-name='imgPath']").append(imgStr);

            }

            pagesResult += 9;
        });

    }

    //最近模块和全部模块切换
    $('.item-list').on('tap',function(){

        var index = $(this).index();

        var lineObj = $('.list-line');

        lineObj.addClass('hide');

        allObj.css('opacity',0).addClass('hide');

        latestObj.css('opacity',0).addClass('hide');
        //$('#channel-all,#channel-latest').css('opacity',0).addClass('hide');

        if(index == 0 ){

            initPage(0);

            renderImg();

            latestObj.removeClass('hide').animate({'opacity':1})

            lineObj.eq(0).removeClass('hide');

        }else{

            initPage(1);

            renderAllImg();

            allObj.removeClass('hide').animate({'opacity':1});

            lineObj.eq(1).removeClass('hide');

        }

    })

    //加载更多
    $('.load-button').on('tap',function(){

        if(latestObj.css('display') == 'none'){

            renderAllImg()

        }else{ renderImg(); }

    })


})