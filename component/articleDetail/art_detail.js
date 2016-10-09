if(!window.com){window.com = {}};

com.renderArticle = function(id){

    app.ajax('get',app.url('getArticleDetail.php'),{id:id},function(data){

        var obj = data;

        if(!obj){

            $('#art-main').text('数据加载失败..');

            return;

        }

        var dataNameList = $('#art-item').find("[data-name]");

        for(var i=0;i<dataNameList.length;i++){

            var dataObj = $(dataNameList[i]);

            dataObj.text(obj[dataObj.attr('data-name')]);

        }

        $('#art-item').find('#content').html(obj.text);

    },false,$('.com-art-toggle'))


}