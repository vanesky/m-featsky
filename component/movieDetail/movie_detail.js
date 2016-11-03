if(!window.com){window.com = {}};

com.renderMovie = function(id){

    app.ajax('get',app.url('getMovieDetail.php'),{id:id},function(data){

        var obj = data;

        if(!obj){

            com.prompt(0,'视频不存在！');

            return;
        }

        $('#video').attr('src',obj.moviePath);

        $('.com-movie-detail').find("[data-name]").each(function(index,val){

            var valObj = $(val);

            var name = valObj.attr('data-name');

            valObj.text(obj[name]);
        });

        $('#movie').removeClass('hide');

    });

}