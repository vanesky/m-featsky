$(function(){

    var pageResult = 0,pageCount = 4;

    renderInfo();

    //加载更多
    $('.load-button').on('tap',function(){

        renderInfo();
    });
    /*==================================================*/
    var writingObj = $('#writing');

    //留言返回按钮
    com.moveDetail(writingObj);

    writingObj.on('touchmove',function(e){

        e.preventDefault();

    });

    //提示
    var writObj = writingObj.find('.writ-text');

    writObj.on('focus',function(){

        $('.writ-prompt').hide();

    });

    //点击留言事件
    $('#mes-input').on('tap',function(){
        //留言初始化
        $("[name='writTit']").val('');

        writObj.text('');

        $('.writ-prompt').show();

        $('#filePath').val('');
        //头像
        //$("[name='imgSrc']").val('img/1.jpg');

        //$('.select-img').hide();

        writingObj.css('-webkit-transform','translateX(-100%)')
    });

    //**********************************************************
    //弹出截取层对象
    var clipImgObj =  $('#clip-img');

    var clipHeadObj = $('.clip-head');

    var clipMainObj = $('.clip-main');


    //选择图片
    $('#upImg').on('tap',function(){

        $("#file").trigger('click');

    })

    //选择照片更改后执行
    $("#file").on('change',function(){

        readeFileContent();

    })

    function readeFileContent() {

        var file = document.getElementById("file").files[0];

        if((file.size/1000)>500){

            $.comMessage({

                type:'warning',

                text:'图片过大请重选',

                time:3000,

                animateTop:'80px'
            })

            return false;

        }else if(!/(jpeg)|(png)|(jpg)$/.test(file.type)){

            $.comMessage({

                type:'warning',

                text:'请选正确的图片格式(JPG/PNG)',

                time:3000,

                animateTop:'80px'
            })

            return false;
        }

        $('#filePath').val(file.name);

        var reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {

            var imgUrl = this.result;

            var img = new Image();

            img.src = imgUrl;

            img.onload = function(){

                var clipw = clipMainObj.css('width');

                if(img.width - img.height > 0){

                    clipHeadObj.prop('src',imgUrl).css('height',clipw);

                }else{

                    clipHeadObj.prop('src',imgUrl).css('width',clipw);

                }

                selx = 300 - Math.abs(clipMainObj.offset().left);

                sely = 300 - Math.abs(clipMainObj.offset().top);

                imgx = clipHeadObj.offset().left;

                imgy = clipHeadObj.offset().top;

            }
        }

        clipImgObj.show();
    }

    //********************************************************************


    //图片坐标剪裁坐标
    var selx = sely = imgx = imgy = '';
    //拖动手指坐标
    var m_sx = m_sy = '';
    //两根手指间距
    var initxy = '';

    //拖动事件
    clipMainObj.on('touchstart',function(e){

        if(e.targetTouches.length>=2){

            initxy = Math.abs(e.targetTouches[0].clientY - e.targetTouches[1].clientY);

        }else{

            initxy = '';

            m_sx = e.touches[0].clientX;

            m_sy = e.touches[0].clientY;

        }
    })

    //拖动和放大事件
    clipMainObj.on('touchmove',function(e){

        if(e.targetTouches.length<=1){

            if(initxy){return}

            var tranx = window.getComputedStyle(clipHeadObj[0],null)['webkitTransform'].split(', ')[4];

            var trany = window.getComputedStyle(clipHeadObj[0],null)['webkitTransform'].split(', ')[5];

            trany = trany.match(/(.+)\)$/)[1];


            var sx = e.touches[0].clientX - m_sx;

            var sy = e.touches[0].clientY - m_sy;

            clipHeadObj.css('-webkit-transform','translate('+Math.round(Number(tranx)+sx)+'px,'+Math.round(Number(trany)+sy)+'px)');

            //console.log(tranx + ' ' + trany  +"  ")

            m_sx = e.touches[0].clientX;

            m_sy = e.touches[0].clientY;

        }else if(e.targetTouches.length>=2){

            var isMax = Math.abs(e.targetTouches[0].clientY - e.targetTouches[1].clientY);

            //动画运行||缩放距离不够 则阻止
            //if((Math.abs(isMax - initXY)<60)){return}
            var w = isMax - initxy;

            var sw = clipHeadObj.width();

            var sh = clipHeadObj.height();

            //根据比例调整大小
            if(sw - sh >0){

                clipHeadObj.css('height',(sh + w) + 'px');

            }else{

                clipHeadObj.css('width',(sw + w) + 'px');

            }

            initxy = isMax;
        }

        //图片坐标
        imgx = clipHeadObj.offset().left;

        imgy = clipHeadObj.offset().top;

    })

    //********************************************************************
    //确定剪裁上传
    $('.clip-button').on('tap',function(){

        uploadFile();
    })

    //提交剪裁参数
    function clipParam(){

        return {

            x:selx - imgx,

            y:sely - imgy,

            s:clipMainObj[0].clientWidth/clipHeadObj.width(),

            w:clipHeadObj.width()
        };
    }

    //上传图片
    function uploadFile(){

        var fd = new FormData();

        fd.append("para",JSON.stringify(clipParam()));

        fd.append("fileToUpload", document.getElementById('file').files[0]);


        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){

            if (xhr.readyState==4){

                if (xhr.status==200){

                    if(xhr.responseText == 1){

                        $.comMessage({

                            type:'success',

                            text:'上传完毕',

                            time:2000,

                            animateTop:'80px',

                            back:function(){

                                clipImgObj.hide();
                            }

                        })


                    }else{

                        $.comMessage({

                            type:'warning',

                            text:'服务器错误',

                            time:3000,

                            animateTop:'80px'
                        })

                    }

                }else{

                    $.comMessage({

                        type:'warning',

                        text:'服务器错误',

                        time:3000,

                        animateTop:'80px'
                    })
                }
            }
        }

        xhr.open("POST",app.url('postImg.php'));

        xhr.upload.addEventListener("progress", uploadProgress, false);

        xhr.addEventListener("load", uploadComplete, false);

        xhr.send(fd);

        //xhr.addEventListener("error", uploadFailed, false);

        //xhr.addEventListener("abort", uploadCanceled, false);

        /* Be sure to change the url below to the url of your upload server side script */
    }

    //上传图片中
    function uploadProgress(event){

        if(event.lengthComputable) {

            $('#pro-main').show();

            var percentComplete = Math.round(event.loaded*100 / event.total);

            $('.pro-info').text(percentComplete + '%');

            $('.pro-val').val(percentComplete);

            if(percentComplete>=100){

                $('.pro-info').text('正在上传..');

            }

        }
    }
    //上传图片完毕
    function uploadComplete(event){

        $('#pro-main').hide();

    }

    //*****************************************************************

    //图片剪裁返回按钮
    com.moveDetail(clipImgObj,function(){

        clipImgObj.css('display','none');

        //初始化
        clipHeadObj.css({

            'width':'',

            'height':'',

            '-webkit-transform':'translate(-50%,-50%)'

        }).prop('src','');

        $('#filePath').val('');
    });

    clipImgObj.on('touchmove',function(e){

        e.preventDefault();

    });


    //提交
    $('#sub').on('tap',function(){

        if(!validateMethod(validate)){ return }

        var data = {

            name:$("input[name='writTit']").val(),

            text:$(".writ-text").text(),

            imgPath:$("#filePath").val()

        };

        app.ajax('post',app.url('postMesData.php'),data,function(data){

            if(data){

                $.comMessage({

                    type:'success',

                    text:'留言成功',

                    time:3000,

                    animateTop:'80px',

                    back:function(){

                        window.location.reload(true);
                    }
                })

            }else{

                $.comMessage({

                    type:'warning',

                    text:'留言失败,错误:' + data,

                    time:3000,

                    animateTop:'80px'
                })

            }
        })
    });

    //取消
    $('#cancel').on('tap',function(){

        writingObj.css('-webkit-transform','translateX(0%)');

    });

    //==============================================================
    var validate = {

        rules:{

            writTit:{require:true,nameRule:true},

            writText:{require:true,textRule:true}

        },

        prompt:{

            writTit:{require:'请填写您的称呼',nameRule:'称呼需是2-6位的文字'},

            writText:{require:'没有什么要说的吗?',textRule:'留言至少5个字符哦'}

        }
    };

    function validateMethod(validate){

        var str = [];

        $.each(validate.rules,function(attrName,attrObj){

            var value = $("[name='"+attrName+"']").val();

            if(!value){  value = $("[name='"+attrName+"']").text() }

            $.each(attrObj,function(ruleName,ruleParam){

                if(!window.validateRule[ruleName](value)){

                    str.push(validate.prompt[attrName][ruleName]);
                }
            })
        });

        if(str.length>0){

            $.comMessage({

                type:'warning',

                text:str[0],

                time:3000,

                animateTop:'80px'
            })

            return false;
        }
        return true;
    }

    function renderInfo(){

        app.ajax('get',app.url('getMesList.php'),{page:pageCount,pageStart:pageResult},function(data){

            var obj = data,str = '';

            //console.log(obj);

            var model = $('#model-1').clone();

            for(var i=0;i<obj.length;i++){

                if(obj[i].statusCode == 404){continue;}

                //列表id
                model.find("[data-name='id']").attr('data-id',obj[i].id);

                //列表背景
                model.find("[data-name='headPath']").css('background-image',"url("+app.imgUrl('user/'+obj[i].headPath)+")");

                //标题
                model.find("[data-name='name']").text(obj[i].name);

                //时间
                model.find("[data-name='time']").text(obj[i].time);

                //内容
                model.find("[data-name='text']").text(obj[i].text);

                str +=  model.html();
            }

            if(str == ''){

                $.comMessage({

                    type:'prompt',

                    text:'已没有更多留言',

                    time:3000,

                    animateTop:'80px'
                })

            }else{

                $('#mes-item').append(str);

            }

            return pageResult = pageResult + pageCount;
        })
    }
    //选择头像
    /*$('.list-img').on('tap',function(){

     var _this = $(this);

     $('.select-img').hide();

     _this.find('.select-img').show();

     $("input[name='imgSrc']").val(_this.find('img').prop('src'));

     })*/
})