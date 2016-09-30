
window.app = {};

(function(){

    this.ajax = function(type,url,obj,sucCallback,bef,loadObj,errCallback){

        $.ajax({

            type:type,

            url:url,

            data:obj,

            success:function(data,status){

                sucCallback(JSON.parse(data),status)

            },

            error:function(xhr,err,msg){

                if(errCallback){

                    errCallback(xhr,err,msg);

                }

            },

            timeout:4000,

            beforeSend:function(){

                if(window.com&&com.load){ com.load(loadObj) }

            },

            complete:function(){

                $('#load').css('display','none');

            }

        })

    },

    this.url = function(url){

        var path = 'develop';

        var workName = 'm-featsky';

        var version = '0.0.1';

        var base = '';

        if(path == 'develop'){

            base = "http://127.0.0.1/m-featsky/src/api/";

        }else if(path == 'test'){

            base = "http://test.featsky.com/api/";

        }else{ base = "http://www.featsky.com/api/" }

        return base + url + "?workName=" + workName + "&date=" + new Date().getTime();

    }

}).apply(app)