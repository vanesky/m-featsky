if(!window.com){window.com = {}};

com.load = function(loadObj){

    if(!loadObj){return false}

    console.log(loadObj)

    var str = '<div id="load"><div class="load-main"><div class="animate">' +
        '<div class="animate-list"></div>' +
        '<div class="animate-list"></div>' +
        '<div class="animate-list"></div>' +
        '</div><span class="animate-text">正在加载 . .</span></div></div>';

    var box = loadObj.find('#load').css('display');

    if(typeof box == 'undefined'){

        loadObj.append(str);

    }else if(box == 'none'){


        $('#load').css('display','block');


    }else{return;}

}