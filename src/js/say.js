$(function(){

    var pageResult = 0,pageCount = 2;

    renderImg();

    function renderImg(){

        app.ajax('get',app.url('getSayList.php'),{page:pageCount,pageStart:pageResult},function(data){

            var obj = data,str = '';

            console.log(obj);

            var model = $('#model-1').clone();

            for(var i=0;i<obj.length;i++){

                if(obj[i].statusCode == 404){continue;}

                var imgListModel = $("#model-1-a").clone();

                //每一条说说的所有图片字符串
                var imgStr = '';

                //******************************************
                //设置相应的CSS属性
                var lineNum = obj[i].imgArrPath.length;

                var w = $('#model-1').find('.img-item').css('width');

                w = w.substr(0,w.length-2);

                var liw = liy = (w-2*(obj[i].imgArrPath.length-1))/lineNum;

                if(lineNum == 1){liy = liw/2};

                imgListModel.find('.img-list').css({

                    width:liw + 'px',

                    height:liy + 'px',
                });
                //******************************************

                //向内存中的子模板循环插入图片
                for(var j=0;j<obj[i].imgArrPath.length;j++){

                    //imgListModel.find('img').prop('src',"img/"+obj[i].imgArrPath[j]);

                    imgListModel.find("[data-name='imgList']").css('background-image',"url("+app.imgUrl("say/"+obj[i].imgArrPath[j])+")");

                    imgStr += imgListModel.html();

                }

                //列表id
                model.find('.say').attr('data-id',obj[i].id);

                //名字
                model.find("[data-name='name']").text(obj[i].name);

                //时间
                model.find("[data-name='time']").text(obj[i].time);

                //头像
                model.find("[data-name='headPath']").css('background-image',"url("+app.imgUrl(obj[i].headPath)+")");

                //内容
                model.find("[data-name='text']").text(obj[i].text);

                //向内存中的dom模板插入图片数列表
                model.find("[data-name='imgArrPath']").html(imgStr);

                //============================================================================

                //获取刚插入的图片列表根据数量设置间距
                var liNum = model.find("[data-name='imgArrPath']").find('li');

                if(liNum.length>1){
                    //margin-left边距
                    liNum.each(function(index,obj){

                        if(index%liNum.length!=0){

                            obj.style.marginLeft = "2px";

                        }
                    })

                    //根据图片比例填充
                    liNum.find('img').each(function(index,obj){

                        if(obj.width<obj.height){

                            obj.style.width = "100%";

                        }else{

                            obj.style.height = "100%";
                        }
                    })

                }else{  liNum.find('img').css('max-width','100%'); }

                str +=  model.html();
            }

            if(str == ''){

                $.comMessage({

                    type:'prompt',

                    text:'没有啦！',

                    time:3000,

                    animateTop:'80px'
                })

            }else{

                $('.load-button').before(str);
            }

            return pageResult = pageResult + pageCount;
        })
    }

    //**************************************************

    $('.load-button').on('tap',function(){

        renderImg();

    });

    //调用图片组件
    var bimObj =  $('.banner-img-main');

    bimObj.bannerMove({

        speed:400,

        second:1

    });

    //添加事件
    $('.container').on('tap','.img-list',function(){

        var _this = $(this);

        var pageImgObj = _this.parent('.img-item').find('.img-list');

        com.pageImageEvent(pageImgObj,this,bimObj);

        //pageImgObj:要显示图片总数对象集合

    })


})