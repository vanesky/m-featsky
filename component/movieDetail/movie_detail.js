if(!window.com){window.com = {}};

com.renderMovie = function(id){

    app.ajax('get',app.url('getMovieDetail.php'),{id:id},function(data){

        var obj = data;

        if(!obj){

            $.comMessage({

                type:'warning',

                text:'视频不存在！',

                time:3000,

                animateTop:'80px'
            })

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