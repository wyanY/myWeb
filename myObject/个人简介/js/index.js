/**
 * Created by Administrator on 2016/11/6.
 */
$(function(){
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        var navH = $("#nav").offset().top;
        if(top >= navH){
            $("#navbar").addClass("current");
        }
        if(top < navH){
            $("#navbar").removeClass("current");
        }
    });
});