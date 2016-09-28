window.com = {};

com.load = function(){

    var str = '<div id="load"><div class="load-main"><div class="animate">' +
        '<div class="animate-list"></div>' +
        '<div class="animate-list"></div>' +
        '<div class="animate-list"></div>' +
        '</div><span class="animate-text">正在加载 . .</span></div></div>';

    $('.container').append(str);

}