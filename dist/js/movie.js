webpackJsonp([5],{12:function(module,exports){eval("if(!window.com){window.com = {}};\r\n\r\ncom.renderMovie = function(id){\r\n\r\n    app.ajax('get',app.url('getMovieDetail.php'),{id:id},function(data){\r\n\r\n        var obj = data;\r\n\r\n        if(!obj){\r\n\r\n            $.comMessage({\r\n\r\n                type:'warning',\r\n\r\n                text:'视频不存在！',\r\n\r\n                time:3000,\r\n\r\n                animateTop:'80px'\r\n            })\r\n\r\n            return;\r\n        }\r\n\r\n        $('#video').attr('src',obj.moviePath);\r\n\r\n        $('.com-movie-detail').find(\"[data-name]\").each(function(index,val){\r\n\r\n            var valObj = $(val);\r\n\r\n            var name = valObj.attr('data-name');\r\n\r\n            valObj.text(obj[name]);\r\n        });\r\n\r\n        $('#movie').removeClass('hide');\r\n\r\n    });\r\n\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbW92aWVEZXRhaWwvbW92aWVfZGV0YWlsLmpzPzBmM2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCOztBQUVoQjs7QUFFQSxrREFBa0QsTUFBTTs7QUFFeEQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUOztBQUVBLEtBQUs7O0FBRUwiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZighd2luZG93LmNvbSl7d2luZG93LmNvbSA9IHt9fTtcclxuXHJcbmNvbS5yZW5kZXJNb3ZpZSA9IGZ1bmN0aW9uKGlkKXtcclxuXHJcbiAgICBhcHAuYWpheCgnZ2V0JyxhcHAudXJsKCdnZXRNb3ZpZURldGFpbC5waHAnKSx7aWQ6aWR9LGZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuICAgICAgICB2YXIgb2JqID0gZGF0YTtcclxuXHJcbiAgICAgICAgaWYoIW9iail7XHJcblxyXG4gICAgICAgICAgICAkLmNvbU1lc3NhZ2Uoe1xyXG5cclxuICAgICAgICAgICAgICAgIHR5cGU6J3dhcm5pbmcnLFxyXG5cclxuICAgICAgICAgICAgICAgIHRleHQ6J+inhumikeS4jeWtmOWcqO+8gScsXHJcblxyXG4gICAgICAgICAgICAgICAgdGltZTozMDAwLFxyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGVUb3A6JzgwcHgnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjdmlkZW8nKS5hdHRyKCdzcmMnLG9iai5tb3ZpZVBhdGgpO1xyXG5cclxuICAgICAgICAkKCcuY29tLW1vdmllLWRldGFpbCcpLmZpbmQoXCJbZGF0YS1uYW1lXVwiKS5lYWNoKGZ1bmN0aW9uKGluZGV4LHZhbCl7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmFsT2JqID0gJCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5hbWUgPSB2YWxPYmouYXR0cignZGF0YS1uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICB2YWxPYmoudGV4dChvYmpbbmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjbW92aWUnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50L21vdmllRGV0YWlsL21vdmllX2RldGFpbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==")},15:function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGVzcy9tb3ZpZS5sZXNzPzA1YWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xlc3MvbW92aWUubGVzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==")},30:function(module,exports,__webpack_require__){eval("__webpack_require__(15);\r\n\r\n__webpack_require__(3);\r\n__webpack_require__(2);\r\n__webpack_require__(1);\r\n\r\n__webpack_require__(0);\r\n__webpack_require__(4);\r\n__webpack_require__(12);\r\n\r\n\r\n$(function(){\r\n\r\n    var pageResult = 0,pageCount = 2;\r\n\r\n    renderData();\r\n\r\n    function renderData(){\r\n\r\n        app.ajax('get',app.url('getMovieList.php'),{page:pageCount,pageStart:pageResult},function(data){\r\n\r\n            var obj = data,str = '';\r\n\r\n            var model = $('#model-1').clone();\r\n\r\n            for(var i=0;i<obj.length;i++){\r\n\r\n                if(obj[i].statusCode == 404){continue;}\r\n\r\n                //列表id\r\n                model.find('.movie-list').attr('data-id',obj[i].id);\r\n\r\n                //列表背景\r\n                model.find(\"[data-name='imgPath']\").css('background-image',\"url(\"+app.imgUrl('movie/'+obj[i].imgPath)+\")\");\r\n\r\n                //标题\r\n                model.find(\"[data-name='title']\").text(obj[i].title);\r\n\r\n                //时间\r\n                model.find(\"[data-name='time']\").text(obj[i].time);\r\n\r\n                //介绍\r\n                model.find(\"[data-name='description']\").text(obj[i].description);\r\n\r\n                str +=  model.html();\r\n            }\r\n\r\n            if(str == ''){\r\n\r\n                $.comMessage({\r\n\r\n                    type:'warning',\r\n\r\n                    text:'已没有更多内容!',\r\n\r\n                    time:3000,\r\n\r\n                    animateTop:'80px'\r\n                })\r\n\r\n            }else{\r\n\r\n                $('#movie-item').append(str);\r\n\r\n            }\r\n            return pageResult = pageResult + pageCount;\r\n\r\n        });\r\n    }\r\n\r\n\r\n    //详情页返回事件\r\n    com.moveDetail($('.com-movie-detail'),function(){\r\n\r\n        $('#video')[0].pause();\r\n\r\n    });\r\n\r\n    //加载更多\r\n    $('.load-button').on('tap',function(){\r\n\r\n        renderData();\r\n\r\n    })\r\n\r\n    //列表事件\r\n    $('#movie-item').on('tap','li',function(){\r\n\r\n        //初始化视频隐藏\r\n        $('#movie').addClass('hide');\r\n\r\n        var id = $(this).attr('data-id');\r\n\r\n        com.renderMovie(id);\r\n\r\n        $('.com-movie-detail').css('-webkit-transform','translateX(-100%)').on('touchmove',function(e){\r\n\r\n            e.preventDefault();\r\n\r\n        })\r\n    })\r\n\r\n\r\n\r\n})//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkvbW92aWUuanM/MGRiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvREFBb0Qsb0NBQW9DOztBQUV4Rjs7QUFFQTs7QUFFQSx3QkFBd0IsYUFBYTs7QUFFckMsNkNBQTZDOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakIsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUztBQUNULEtBQUs7Ozs7QUFJTCxDQUFDIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vbGVzcy9tb3ZpZS5sZXNzJyk7XHJcblxyXG5yZXF1aXJlKCcuLi9saWIvemVwdG8uanMnKTtcclxucmVxdWlyZSgnLi4vanMvY29tbW9uLmpzJyk7XHJcbnJlcXVpcmUoJy4uL2pzL2FqYXguanMnKTtcclxuXHJcbnJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudC9tZXNzYWdlL2NvbS1tZXNzYWdlLmpzJyk7XHJcbnJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudC9sb2FkL2NvbS1sb2FkLmpzJyk7XHJcbnJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudC9tb3ZpZURldGFpbC9tb3ZpZV9kZXRhaWwuanMnKTtcclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHBhZ2VSZXN1bHQgPSAwLHBhZ2VDb3VudCA9IDI7XHJcblxyXG4gICAgcmVuZGVyRGF0YSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlckRhdGEoKXtcclxuXHJcbiAgICAgICAgYXBwLmFqYXgoJ2dldCcsYXBwLnVybCgnZ2V0TW92aWVMaXN0LnBocCcpLHtwYWdlOnBhZ2VDb3VudCxwYWdlU3RhcnQ6cGFnZVJlc3VsdH0sZnVuY3Rpb24oZGF0YSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgb2JqID0gZGF0YSxzdHIgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHZhciBtb2RlbCA9ICQoJyNtb2RlbC0xJykuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8b2JqLmxlbmd0aDtpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9ialtpXS5zdGF0dXNDb2RlID09IDQwNCl7Y29udGludWU7fVxyXG5cclxuICAgICAgICAgICAgICAgIC8v5YiX6KGoaWRcclxuICAgICAgICAgICAgICAgIG1vZGVsLmZpbmQoJy5tb3ZpZS1saXN0JykuYXR0cignZGF0YS1pZCcsb2JqW2ldLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WIl+ihqOiDjOaZr1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuZmluZChcIltkYXRhLW5hbWU9J2ltZ1BhdGgnXVwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLFwidXJsKFwiK2FwcC5pbWdVcmwoJ21vdmllLycrb2JqW2ldLmltZ1BhdGgpK1wiKVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICAgICAgbW9kZWwuZmluZChcIltkYXRhLW5hbWU9J3RpdGxlJ11cIikudGV4dChvYmpbaV0udGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5pe26Ze0XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5maW5kKFwiW2RhdGEtbmFtZT0ndGltZSddXCIpLnRleHQob2JqW2ldLnRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5LuL57uNXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5maW5kKFwiW2RhdGEtbmFtZT0nZGVzY3JpcHRpb24nXVwiKS50ZXh0KG9ialtpXS5kZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RyICs9ICBtb2RlbC5odG1sKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHN0ciA9PSAnJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5jb21NZXNzYWdlKHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTond2FybmluZycsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6J+W3suayoeacieabtOWkmuWGheWuuSEnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lOjMwMDAsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVUb3A6JzgwcHgnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI21vdmllLWl0ZW0nKS5hcHBlbmQoc3RyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhZ2VSZXN1bHQgPSBwYWdlUmVzdWx0ICsgcGFnZUNvdW50O1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/or6bmg4XpobXov5Tlm57kuovku7ZcclxuICAgIGNvbS5tb3ZlRGV0YWlsKCQoJy5jb20tbW92aWUtZGV0YWlsJyksZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnI3ZpZGVvJylbMF0ucGF1c2UoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgJCgnLmxvYWQtYnV0dG9uJykub24oJ3RhcCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgcmVuZGVyRGF0YSgpO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy/liJfooajkuovku7ZcclxuICAgICQoJyNtb3ZpZS1pdGVtJykub24oJ3RhcCcsJ2xpJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluinhumikemakOiXj1xyXG4gICAgICAgICQoJyNtb3ZpZScpLmFkZENsYXNzKCdoaWRlJyk7XHJcblxyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICBjb20ucmVuZGVyTW92aWUoaWQpO1xyXG5cclxuICAgICAgICAkKCcuY29tLW1vdmllLWRldGFpbCcpLmNzcygnLXdlYmtpdC10cmFuc2Zvcm0nLCd0cmFuc2xhdGVYKC0xMDAlKScpLm9uKCd0b3VjaG1vdmUnLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbnRyeS9tb3ZpZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==")}},[30]);