/**
 * Created by Administrator on 2016/10/20.
 */
    $(function(){
        var p = $(".chara");
        var svg = $("header svg");
        function mouse(box,pic,className){
            for(var i = 0;i < className.length;i++){
                box.mouseenter(function(){
                    var $this = $(this);
                    index = $this.index();

                    pic.eq(index).addClass(className).siblings(pic).removeClass(className);
                })
            }
            /*box.mousemove(function(){

            });
            box.mouseout(function(){
                pic.removeClass(className);
            });*/
        }
        //mouse(svg,p,"current");

        var menu = $(".menu");
        var divs = $(".menu div");
        console.log(divs);
        console.log(menu);

        mouse(menu,divs,"pic");

    });

