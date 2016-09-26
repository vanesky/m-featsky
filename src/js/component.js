
window.com = {};

(function(){

    this.load = function(){

        var str = '<div id="load"><div class="load-main"><div class="animate">' +
            '<div class="animate-list"></div>' +
            '<div class="animate-list"></div>' +
            '<div class="animate-list"></div>' +
            '</div><span class="animate-text">正在加载 . .</span></div></div>';

        $('.container').append(str);

    };

    this.mesAnimate = function(obj,sport1,sport2){

        obj.on('tap',function(){

            sport1.css({

                'display':'block',

                'transform':"translateX(0%)",

            });

            //sport2.css('transform',"translateX(-50px)");

        })

    }

}).apply(com)
