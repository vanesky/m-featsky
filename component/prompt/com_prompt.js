if(!window.com){window.com = {}};

com.prompt = function(type,text,fun1,fun2){

    var str = '<div id="com-prompt"><div class="prompt-main"><h5 class="prompt-tit">提示</h5><div class="prompt-text">0</div><ul class="prompt-item"> <li class="prompt-button bc-db c6">取消</li> <li class="prompt-button c-ba cf">确定</li> </ul> </div> </div>';

    var promptObj = $('#com-prompt');

    if(!promptObj.css('display')){

        $('body').append(str);

        promptObj = $('#com-prompt');

    }

    //********************************

    //********************************
    promptObj.find('.prompt-text').text(text);

    promptObj.css('display','block').animate({

        opacity:1

    },300);

    if(type == 0){

        promptObj.find('.prompt-button').eq(0).hide();

        if(fun1){

            promptObj.find('.prompt-button').on('tap',function(){

                fun1();

            })
        }

    }else if(type == 1 && fun1 && fun2){

        promptObj.find('.prompt-button').on('tap',function(){

            var index = $(this).index();

            0 == index ? fun1() : fun2();

        })

    }

    promptObj.find('.prompt-button').on('tap',function(){

        promptObj.animate({

            opacity:0

        },300,function(){

            promptObj.css('display','none')

        });
    })

}