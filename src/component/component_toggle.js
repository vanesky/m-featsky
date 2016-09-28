window.com = {};

com.toggle = function(obj,sport1,sport2){

    obj.on('tap',function(){

        sport1.css({

            'display':'block',

            'transform':"translateX(0%)",

        });

        //sport2.css('transform',"translateX(-50px)");

    })

}