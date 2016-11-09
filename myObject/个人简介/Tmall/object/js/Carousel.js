/**
 * Created by Administrator on 2016/10/5.
 */


/////////////////////////////////////////////////////////

             //轮播图

//////////////////////////////////////////////////////////

var  oBannerCon = document.getElementById('bannerCon');   //通栏广告
var aBrannerDiv = oBannerCon.getElementsByTagName('div');

var num = 0;

var timer = null, timer1 = null;
var  oCircle = document.getElementById('circle');   //小圆点


//timer1 = setTimeout(function () {
    timer = setInterval(autoPlay,3000);
//},3000);

//有多少张图片,就生成多少个 装图片的li 和 小圆点
for(var i = 0; i < aBrannerDiv.length; i ++){
    oCircle.innerHTML += '<li></li>';
}
var aCircleLi = oCircle.getElementsByTagName('li');
aCircleLi[num].className = 'current';                 //初始化


for(var i = 0; i < aBrannerDiv.length; i++){

    aBrannerDiv[i].onmouseover = function () {
        //clearTimeout(timer1);
        clearInterval(timer);
    };
    aBrannerDiv[i].onmouseout = function () {
        timer = setInterval(autoPlay,3000);
    };

    aCircleLi[i].index = i;
    aCircleLi[i].onmouseover = function () {

        clearInterval(timer);
        //clearTimeout(timer1);
        num = this.index;

        for(var j = 0; j < aBrannerDiv.length; j ++){
            opacity(aBrannerDiv[j],0.8,0);
            aCircleLi[j].className = '';
        }
        opacity(aBrannerDiv[this.index],0.60,1);
        this.className = 'current';
    };

    aCircleLi[i].onmouseout = function () {
        timer = setInterval(autoPlay,3000);

    }
}
function autoPlay(obj,index){

    num ++;
    if(num == aBrannerDiv.length){
        num = 0;
    }
    for(var j = 0; j < aBrannerDiv.length; j ++){
        opacity(aBrannerDiv[j],0.8,0);
        aCircleLi[j].className = '';
    }
    opacity(aBrannerDiv[num],0.60,1);
    aCircleLi[num].className = 'current';
}

function opacity(obj,dir,target,callback){

    dir = parseFloat(getStyle(obj,'opacity')) > target ? -dir : dir;


    clearInterval(obj.opacityTm);

    obj.opacityTm = setInterval(function () {

        var speed = parseFloat(getStyle(obj,'opacity')) + dir;
        //var speed = parseFloat(obj.offsetOpacity)) + dir;

        if(speed > target && dir > 0 || speed < target && dir < 0){
            speed = target;
        }


        obj.style.opacity = speed;

        if(speed == target){
            clearInterval(obj.opacityTm);

            if(callback){
                callback();
            }
        }
    },100)
}

function getStyle(obj,attr){
    //return  obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    return getComputedStyle(obj)[attr];
}