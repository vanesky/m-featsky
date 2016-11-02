(function($){

    $.fn.bannerMove = function(sel){

        var _this = this,banner = {};

        var banner_w = $(window).width();

        (function(obj){
            //初始化
            this.init = function(){

                obj.css({

                    'width': sel.grades*banner_w + 'px',

                    'transition':'',

                    '-webkit-transform':'translateX('+-(sel.grade*banner_w)+'px)'

                });

                setTimeout(function(){

                    obj.css('transition','-webkit-transform '+sel.speed/1000+'s');

                },50)

                $('.banner-img').find('#title-grade').text(sel.grade+1);

                $('.banner-img').find('#title-grades').text(sel.grades);

            }
            //滑动
            this.slide = function(direction){

                obj.find('img').css({

                    'left':'0px',

                    'top':'0px',

                    'transform':'scale(1)'

                })

                var banner_ = direction == 'left'? banner_w : -banner_w;

                var xIng = window.getComputedStyle(obj[0],null)['webkitTransform'].split(', ')[4];

                if(Math.abs(xIng)%banner_w !=0){return}

                if((direction == 'right' && xIng == 0) || (direction == 'left' && xIng == (obj.children().length-1)*-banner_w) ){

                    return ;

                }

                var gradeObj = $('.banner-img').find('#title-grade');

                var isAdd = direction == 'left'? 1 : -1;

                    gradeObj.text(Number(gradeObj.text())+isAdd);



                obj.css('-webkit-transform','translateX('+(xIng-banner_)+'px)');

            }
            //事件
            this.evtSlide = function(){

                var startTime = '',movex = '',movexIng = '';

                obj[0].addEventListener('touchstart',function(e){

                    //防止图片缩放写入数据
                    movexIng = '';

                    startTime = new Date().getTime();

                    movex = e.touches[0].clientX;

                    //图片缩放功能*******************************
                    if(sel.second == 1){
                        if(e.targetTouches.length>=2){

                            initXY = xy = Math.abs(e.targetTouches[0].clientY - e.targetTouches[1].clientY);

                        }else if(e.targetTouches.length ==1){

                            lateX = e.targetTouches[0].clientX;

                            lateY = e.targetTouches[0].clientY;

                        }
                    }
                    //*******************************************

                });

                obj[0].addEventListener('touchmove',function(e){

                    movexIng = e.touches[0].clientX;

                })

                obj[0].addEventListener('touchend',function(e){


                    var difference = new Date().getTime() - startTime;

                    if(difference<250&&movexIng&&(movexIng-movex)<-60){

                        //console.log('left')

                        banner.slide('left');

                    }
                    else if(difference<250&&movexIng&&(movexIng-movex)>60){

                        //console.log('right');

                        banner.slide('right');

                    }

                });

                /*obj.on('swipeLeft', function(){

                    banner.slide('left');

                });

                obj.on('swipeRight', function(){

                    banner.slide('right');

                });*/

                //********************************************************

                /*$('.banner-img-main').on('touchstart','img',function(e){

                    if(e.targetTouches.length>=2){

                        initXY = xy = Math.abs(e.targetTouches[0].clientY - e.targetTouches[1].clientY);

                    }else if(e.targetTouches.length ==1){

                        lateX = e.targetTouches[0].pageX;

                        lateY = e.targetTouches[0].pageY;

                    }

                })*/

                if(sel.second == 1){

                    //*************************************
                    var initXY = 0,xy = 0,scaleNum = 0.5;

                    var lateX = 0,lateY = 0;
                    //*************************************

                    obj.on('touchmove','img',function(e){

                        //获取当前缩放值
                        var scale = window.getComputedStyle(this,null)['webkitTransform'].split(', ')[3];

                        var _this = $(this);

                        //两个手指缩放处理
                        if(e.targetTouches.length>=2){

                            //获取当前移动中的距离
                            var isMax = Math.abs(e.targetTouches[0].clientY - e.targetTouches[1].clientY);
                            //动画运行||缩放距离不够 则阻止
                            if((scale%scaleNum!=0)||(Math.abs(isMax - initXY)<40)){return}

                            var dir = scaleNum;

                            if(isMax < xy) {dir = -dir}

                            _this.css('-webkit-transform','scale('+ (Number(scale)+dir) +')');

                            xy = isMax;

                            //当缩放完成后可拖动查看图片
                        }else if(e.targetTouches.length ==1){

                            //如果正在缩放阻止拖动
                            if(scale<=1||(scale%scaleNum!=0)){return}

                            //阻止图片超过边界
                            var nw = (_this.width()-$(window).width())/2;

                            //当前手指移动的距离(正负)
                            var x = e.targetTouches[0].clientX - lateX;

                            var y = e.targetTouches[0].clientY - lateY;

                            //当前图片的偏移距离
                            var x_ = _this.css('left');

                            x_ = x_.substr(0,x_.length-2);

                            var y_ = _this.css('top');

                            y_ = y_.substr(0,y_.length-2);


                            //图片到达边界所做的处理
                            if(Math.round(x_) > (nw-4) && x>0){

                                _this.css({

                                    'left':nw + 'px',

                                    'top':Number(y_) + y
                                });


                            }else if(Math.round(x_) < -(nw-4)&& x<=0){

                                _this.css({

                                    'left':-nw + 'px',

                                    'top':Number(y_) + y
                                });


                            }else{

                                _this.css({

                                    'left':Number(x_) + x,

                                    'top':Number(y_) + y

                                })
                            }


                            lateX = e.targetTouches[0].clientX;

                            lateY = e.targetTouches[0].clientY;
                        }
                    })
                }

            }

        }).apply(banner,[_this])


        function runResize(){

            //banner.slide('left');

            $('.banner-list').css('width',banner_w+'px');

            //banner.init();

            banner.evtSlide();

            //if(typeof sel.speed == 'undefined'|| typeof sel.mspeed =='undefined'){return}

            //time = setTimeout(function(){banner.slideRun('left');},sel.speed);

            //$(window).resize(function(){ banner.slide();})

        }


        if(sel.grade || sel.grades){

            banner.init();

            return ;

        }

        runResize();


    }



})(Zepto)