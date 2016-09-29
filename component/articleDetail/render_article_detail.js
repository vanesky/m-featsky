if(!window.com){window.com = {}};

com.renderArticle = function(){

    app.ajax('get',app.url('getArticleDetail.php'),{id:5},function(data){

        var obj = data;

        console.log(obj)

        var dataNameList = $('#art-item').find("[data-name]");

        for(var i=0;i<dataNameList.length;i++){

            var dataObj = $(dataNameList[i]);

            dataObj.text(obj[dataObj.attr('data-name')]);

        }

        $('#art-item').find('#content').html(obj.text);

    })
}