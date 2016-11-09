/**
 * Created by Administrator on 2016/10/5.
 */


    var aBrandImg = document.getElementsByClassName('brand-img');

    var aBrandImgSrc = ['images/tubiao/1.jpg','images/tubiao/2.jpg','images/tubiao/3.jpg','images/tubiao/4.jpg','images/tubiao/5.jpg','images/tubiao/6.jpg'
                         ,'images/tubiao/7.jpg','images/tubiao/8.jpg','images/tubiao/9.jpg','images/tubiao/10.jpg','images/tubiao/11.jpg'
                         ,'images/tubiao/12.jpg','images/tubiao/14.jpg','images/tubiao/15.jpg','images/tubiao/16.jpg','images/tubiao/17.jpg'
                        ,'images/tubiao/18.jpg','images/tubiao/19.jpg','images/tubiao/20.jpg','images/tubiao/21.jpg','images/tubiao/22.jpg'
                        ,'images/tubiao/23.jpg','images/tubiao/24.jpg'
    ];



    function onloadPic(eleList,imgSrc){
        //var aImg = eleList.getElementsByTagName('img')[0];

        for(var i = 0; i < eleList.length; i ++ ){
            eleList[i].innerHTML = '<img src=' + imgSrc[i] +'>';
        }

    }

    onloadPic(aBrandImg,aBrandImgSrc);


    var aBrandItem = document.getElementsByClassName('brand-item');
    var aBrandMask = document.getElementsByClassName('brand-mask');

for(var i = 0; i < aBrandMask.length; i ++){
    aBrandMask[i].innerHTML = "<div class='brand-mask-icon'><img src='images/心.png' alt=''/></div>" +
        "<div class='brand-mask-center'>优惠券 ¥20</div><div class='brand-mask-bottom'>点击进入</div>"
}



    for(var i = 0; i < aBrandMask.length; i ++){
        aBrandItem[i].index = i;
        aBrandItem[i].onmouseover = function () {
            aBrandMask[this.index].style.display = 'block';
        }
        aBrandItem[i].onmouseout = function () {
            aBrandMask[this.index].style.display = 'none';
        }
    }



