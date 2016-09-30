if(!window.com){window.com = {}};

com.renderMovie = function(id){

    var comMovieDetail = $('.com-movie-detail');

    app.ajax('get',app.url('getMovieDetail.php'),{id:id},function(data){

        var obj = data;

        $('#video').attr('src','video/'+obj.moviePath);

        comMovieDetail.find("[data-name]").each(function(index,val){

            var valObj = $(val);

            var name = valObj.attr('data-name');

            valObj.text(obj[name]);
        })
    },false,comMovieDetail);

}