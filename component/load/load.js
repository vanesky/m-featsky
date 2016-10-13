if(!window.com){window.com = {}};

com.load = function(loadObj){

    //if(!loadObj){return false}

    var str = '<div id="load"><div class="load-main"><div class="animate">' +
        '<div class="animate-list"></div>' +
        '<div class="animate-list"></div>' +
        '<div class="animate-list"></div>' +
        '</div><span class="animate-text">正在加载 . .</span></div></div>';

    //var box = loadObj.find('#load').css('display');

    var box = $('#load').css('display');

    if(typeof box == 'undefined'){

        $('body').append(str);

    }else if(box == 'none'){

        $('#load').css('display','block');

    }else{return;}

}