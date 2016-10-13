if(!window.com){window.com = {}};

com.renderArticle = function(id){

    var dataNameList = $('#art-item').find("[data-name]");

        dataNameList.text('');

    var contentObj =  $('#art-item').find('#content');

        contentObj.html('');

    app.ajax('get',app.url('getArticleDetail.php'),{id:id},function(data){

        var obj = data;

        if(!obj){

            $('#art-main').text('数据加载失败..');

            return;

        }


        for(var i=0;i<dataNameList.length;i++){

            var dataObj = $(dataNameList[i]);

            dataObj.text(obj[dataObj.attr('data-name')]);

        }

        contentObj.html(obj.text);

    })


}