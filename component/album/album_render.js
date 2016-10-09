if(!window.com){window.com = {}};

com.pageImageEvent = function(obj,_this,liItemObj,ComponentObj){

    var str = '',imgs = [],imgId = '';

    //===========================================
    $(document).on('touchmove',function(e){

        e.preventDefault();

        e.stopPropagation();

    })

    ComponentObj.css('display','block').animate({

        opacity:1

    },200);
    //============================================

    //获取页面图片路径渲染到组件模板

    obj.each(function(index,obj){

        if(obj == _this){imgId = index}

        var imgpath = obj.style.backgroundImage;

        imgpath = imgpath.match(/\/([\w]+\.(jpg|png))/)[1];

        imgs.push(imgpath);

    })

    var imgModel = $('#model-2').clone();

    $(imgs).each(function(index,obj){

        imgModel.find('img').attr('src',"img/"+ obj);

        str += imgModel.html()

    })

    liItemObj.html(str);
    //====================================================================

    liItemObj.bannerMove({

        speed:400,

        grade:imgId,

        grades:obj.length,

        second:0
    });

}
