if(!window.com){window.com = {}};

com.renderArticle = function(id){
    //初始化
    var dataNameList = $('#art-item').find("[data-name]");

        //dataNameList.text('');

    var contentObj =  $('#art-item').find('#content');

        //contentObj.html('');

    app.ajax('get',app.url('getArticleDetail.php'),{id:id},function(data){

        var obj = data;

        if(!obj){

            $.comMessage({

                type:'warning',

                text:'文章加载失败!',

                time:3000,

                animateTop:'80px'
            })

            return;
        }

        for(var i=0;i<dataNameList.length;i++){

            var dataObj = $(dataNameList[i]);

            dataObj.text(obj[dataObj.attr('data-name')]);

        }

        var replaceStr = obj.text.replace(/"(.+)\./g,'"'+app.imgUrl('art/$1.'));

        contentObj.html(replaceStr);

        $('#art-main').removeClass('hide');

    });

};