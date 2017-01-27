if(!window.com){window.com = {}};

com.renderArticle = function(id){
    //初始化
    var dataNameList = $('#art-item').find("[data-name]");

        //dataNameList.text('');

    var contentObj =  $('#art-item').find('#content');

        //contentObj.html('');

    app.ajax('get',app.url('getArticleDetail.php'),{id:id},function(data){

        var obj = data;
        console.log(obj)
        if(!obj){

            com.prompt(0,'文章加载失败');

            return;
        }

        for(var i=0;i<dataNameList.length;i++){

            var dataObj = $(dataNameList[i]);

            dataObj.text(obj[dataObj.attr('data-name')]);

        }

        //var replaceStr = obj.text.replace(/"(.+)\./g,'"'+app.imgUrl('art/$1.'));
        var replaceStr = obj.text.replace(/"(.+)\./g,'"'+'$1.');
        contentObj.html(replaceStr);

        $('#art-main').removeClass('hide');

    },1);

};