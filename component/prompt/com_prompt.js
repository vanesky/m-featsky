if(!window.com){window.com = {}};

com.prompt = function(type,text,fun1,fun2){

    var promptObj = $('#com-prompt');

    promptObj.find('.prompt-text').text(text);

    promptObj.css('display','block').animate({

        opacity:1

    },300);

    if(type == 0){

        promptObj.find('.prompt-button').eq(0).hide();

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