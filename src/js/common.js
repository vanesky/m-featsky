!function(window){

    "use strict";

    window.bom = {};

    (function(){

        this.device = function(){

            //if(window.localStorage.device){return false}

            var bom1 = navigator.userAgent,send = {};

            //var bom2 = navigator.appName;

            if(bom1.match(/iPhone|iPad/i)){

                send.version = Number(bom1.match(/OS\s([5-9])_/)[1]);

                send.name = bom1.match(/(iPhone|iPad)/i)[1];

            }else if(bom1.match(/Android/i)){

                send.version = Number(bom1.match(/Android\s(\d\.\d)/)[1]);

                send.name = 'Android';

            }else if(bom1.match(/Firefox|Chrome/i)){

                send.version = Number(bom1.match(/(Firefox|Chrome)\/(\d+)\./)[2]);

                send.name = bom1.match(/Firefox|Chrome/i)[0];

            }else if(bom1.match(/MSIE/)){

                send.version = Number(bom1.match(/MSIE\s(\d+)\./)[1]);

                send.name = 'ie';

            }

            send.h = window.screen.height;

            send.w = window.screen.width;

            localStorage.device = JSON.stringify(send);

        };

        this.supportCss3 = function(attr){

            var box = ['-webkit-','-os-','-ms-','-moz-'];

            var defaultStyle = document.documentElement.style;

            if(attr in defaultStyle){

                return true;

            }else{

                for(var i=0;i<box.length;i++){

                    if(box[i]+attr in defaultStyle){

                        return true;

                    }
                }

            }

            return false;

        };

        this.page = function(){

            var foot = '<footer><p>Copyright &copy;http://www.featsky.com</p><p>Email 641151096qq.com</p></footer>';

            $('.container').append(foot);

        };

        this.moveDetail = function(obj,fun){

            obj.find('.back').on('tap',function(){

                obj.css('-webkit-transform','translateX(0%)');

                if(fun){fun()}

            })

        };

        this.navEffect = function(){

            $('.menu-list').on('tap',function(){

                var a = $('#nav')[0];

                var box = window.getComputedStyle(a,null)['webkitTransform'];

                box = box.split(',');

                if(box == 'none'||0 == $.trim(box[4])){

                    $('#nav').css('-webkit-transform','translateX(-100%)');

                }else{

                    $('#nav').css('-webkit-transform','translateX(0%)');

                }
            })

            $('#nav').find('.nav-list').on('tap',function(){

                var name = $(this).attr('data-name');

                window.open(name+".html","_self");

            })

        };

    }).apply(bom);

    $(function(){

        bom.device();

        bom.page();

        bom.navEffect();

    })




}(window);









