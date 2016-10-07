(function(){

    $('.menu-list').on('touchstart',function(){

        var a = $('#nav')[0];

        var box = window.getComputedStyle(a,false)['transform'];

        box = box.split(',');

        if(box == 'none'||0 == $.trim(box[4])){

            $('#nav').css('transform','translateX(-12rem)');

        }else{

            $('#nav').css('transform','translateX(0rem)');

        }
    })


})();