/**
 * Created by Administrator on 2016/10/13.
 */
$(function(){
   waterFall();
    //����ͼƬ
    var dataInt = {"data":[{"src":"03-1.jpg"},{"src":"03-2.jpg"},{"src":"03-3.jpg"}]};
    $(window).scroll(function(){
        if(checkScrollSlide){
            //�����ǩ��
            $.each(dataInt.data,function(key,value){
                var Box = $("<div>").addClass("box").appendTo($("#main"));
                var Pic = $("<div>").addClass("pic").appendTo($(Box));
                var Img = $("<img>").attr("src","images/"+$(value).attr("src")).appendTo($(Pic));
            })
        }waterFall();
    })
});
function waterFall(){
     //�������class=box��Ԫ��
     var $boxs = $("#main>div");
     var w = $boxs.eq(0).outerWidth();
     //���һ��ͼƬ�ĸ���
     var cols = Math.floor($("#main").width()/w);
     //�õ�һ��ͼƬ�ĸ߶�
     var hArr = [];
     $boxs.each(function(index,value){
         var h = $boxs.eq(index).outerHeight();
         if(index < cols){
             //��õ�һ�е����и߶ȼ���
             hArr[index] = h;
         }else{
             //�õ�һ��ͼƬ�и߶ȵ���Сֵ
             var minH = Math.min.apply(null,hArr);
             //��ø߶���СͼƬ������
             var minHIndex = $.inArray(minH,hArr);
             //���ڶ��еĵ�һ��ͼƬ��λ���߶���С��ͼƬ����
             $(value).css({
                 "position":"absolute",
                 "top": minH +'px',
                 "left": minHIndex*w +'px'
             });
             hArr[minHIndex] += $boxs.eq(index).outerHeight();
         }
     })
}
//����Ƿ�߱�ͼƬ���ص�����
function checkScrollSlide(){
    //�õ����һ��ͼƬ��λ��
    var lastPic = $("#main>div").last();
    var lastH = lastPic.offset().top+Math.floor(lastPic.outerHeight()/2);
    //�õ�ҳ������ĸ߶�����ҳ�Ŀ��Ӹ߶�
    var scrollH = $(window).scrollTop();
    var documentH = $(window).height();
    //�ж�
    return (scrollH+documentH > lastH)?true:false;
}