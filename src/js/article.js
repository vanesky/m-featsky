$(function(){

    var pageResult = 0,pageCount = 2;

    renderData();

    function renderData(){

        app.ajax('get',app.url('getArticleList.php'),{page:pageCount,pageStart:pageResult},function(data){

            var obj = data,str = '';

            console.log(obj);

            var model = $('#model-1').clone();

            for(var i=0;i<obj.length;i++){

                if(obj[i].statusCode == 404){continue;}

                //列表id
                model.find('.article-item').attr('data-id',obj[i].id);

                //列表背景
                if(obj[i].imgPath){

                    model.find("[data-name='imgPath']").css('background-image',"url("+app.imgUrl("art/"+obj[i].imgPath)+")");

                }else{model.find("[data-name='imgPath']").css('display',"none");}
                //标题
                model.find("[data-name='title']").text(obj[i].title);

                //时间
                model.find("[data-name='time']").text(obj[i].time);

                //内容
                model.find("[data-name='text']").text(obj[i].text);

                str +=  model.html();
            }

            if(str == ''){

                $.comMessage({

                    type:'prompt',

                    text:'没有啦！',

                    time:4000,

                    animateTop:'80px'
                })

            }else{

                $('.load-button').before(str);

            }

            return pageResult = pageResult + pageCount;
        })
    }

    //=================================================================
    //详情落地页面高度
    $('#art-main').css('height',$(window).height()-50 + 'px');

    //加载更多
    $('.load-button').on('tap',function(){

        renderData();

    })

    //列表事件
    $('.container').on('tap','.article-item',function(){

        //隐藏详情页
        $('#art-main').addClass('hide');

        var id = $(this).attr('data-id');

        com.renderArticle(id);

        $('.com-art-toggle').css('-webkit-transform','translateX(-100%)');

    });
    //详情页返回事件
    com.moveDetail($('.com-art-toggle'));

    //页面滚动==============================================
    var scrollStop = (function(){

        var page_y = '';

        this.start = function(obj1,obj2){

            obj2.on('touchstart',function(e){

                page_y = e.touches[0].clientY;

            })
        };

        this.move = function(obj1,obj2){

            obj2.on('touchmove',function(e){

                var num = e.touches[0].clientY - page_y;

                var stop = obj2.scrollTop();

                if(obj1.height()<obj2.height()){

                    e.preventDefault();

                }

                if(stop>=obj1.height()-obj2.height()&&num<0){

                    e.preventDefault();

                }
            })
        };

        return {

            start:start,

            move:move
        }

    })();

    scrollStop.start($('#art-item'),$('#art-main'));

    scrollStop.move($('#art-item'),$('#art-main'));

    //=====================================================

    //搜索
    $('.search-img').on('tap',function(){

        var str = $("input[name='search']").val();

        if(str.length>=1){

            localStorage.setItem('search',str);

            window.open('search.html','_self');

        }else{

            $.comMessage({

                type:'prompt',

                text:'请填写搜索内容',

                time:4000,

                animateTop:'80px'
            })
        }
    })

})