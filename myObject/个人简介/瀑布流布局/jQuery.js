/**
 * Created by Administrator on 2016/10/13.
 */
$(function(){
   waterFall();
    //加载图片
    var dataInt = {"data":[{"src":"03-1.jpg"},{"src":"03-2.jpg"},{"src":"03-3.jpg"}]};
    $(window).scroll(function(){
        if(checkScrollSlide){
            //插入标签对
            $.each(dataInt.data,function(key,value){
                var Box = $("<div>").addClass("box").appendTo($("#main"));
                var Pic = $("<div>").addClass("pic").appendTo($(Box));
                var Img = $("<img>").attr("src","images/"+$(value).attr("src")).appendTo($(Pic));
            })
        }waterFall();
    })
});
function waterFall(){
     //获得所有class=box的元素
     var $boxs = $("#main>div");
     var w = $boxs.eq(0).outerWidth();
     //获得一行图片的个数
     var cols = Math.floor($("#main").width()/w);
     //得到一行图片的高度
     var hArr = [];
     $boxs.each(function(index,value){
         var h = $boxs.eq(index).outerHeight();
         if(index < cols){
             //获得的一行的所有高度集合
             hArr[index] = h;
         }else{
             //得到一行图片中高度的最小值
             var minH = Math.min.apply(null,hArr);
             //获得高度最小图片的索引
             var minHIndex = $.inArray(minH,hArr);
             //将第二行的第一张图片定位到高度最小的图片下面
             $(value).css({
                 "position":"absolute",
                 "top": minH +'px',
                 "left": minHIndex*w +'px'
             });
             hArr[minHIndex] += $boxs.eq(index).outerHeight();
         }
     })
}
//检测是否具备图片加载的条件
function checkScrollSlide(){
    //得到最后一张图片的位置
    var lastPic = $("#main>div").last();
    var lastH = lastPic.offset().top+Math.floor(lastPic.outerHeight()/2);
    //得到页面滚动的高度与网页的可视高度
    var scrollH = $(window).scrollTop();
    var documentH = $(window).height();
    //判断
    return (scrollH+documentH > lastH)?true:false;
}