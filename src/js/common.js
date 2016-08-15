!function(window){

    "use strict";

    window.com = {};

    (function(){

        this.device = function(){                          //种植设备信息

            if(window.localStorage.device){return false}

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

        this.supportCss3 = function(attr){                          //是否支持Css3

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

            var head = '<nav class="fx-row-b bs-r"><img id="logo" src="img/logo.png" alt=""> <ul class="fx-col-b bs-r"> <li></li> <li></li> <li></li> </ul> </nav>';

            var foot = '<footer><p>Copyright &copy;http://www.featsky.com</p><p>Email 641151096qq.com</p></footer>';

            $('body').prepend(head);

            $('.container').append(foot);

        }


    }).apply(com);

    com.device();

    com.page();



}(window);









