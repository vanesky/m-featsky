if(!window.com){window.com = {}};

com.renderMovie = function(id){

    app.ajax('get',app.url('getMovieDetail.php'),{id:id},function(data){

        var obj = data;

        $('#video').attr('src','video/'+obj.moviePath);

        $('.com-movie-detail').find("[data-name]").each(function(index,val){

            var valObj = $(val);

            var name = valObj.attr('data-name');

            valObj.text(obj[name]);
        })
    });

}