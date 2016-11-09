/**
 * Created by Administrator on 2016/10/13.
 */
window.onload = function(){
    waterFall('main','box');
    var dataInt = {"data":[{"src":"03-1.jpg"},{"src":"03-2.jpg"},{"src":"03-3.jpg"}]};
    window.onscroll = function(){
        if(checkScrollSlide){
            var par = document.getElementById('main');
            for(var i = 0;i < dataInt.data.length;i++){
                var oBox = document.createElement("div");
                oBox.className = "box";
                par.appendChild(oBox);
                var oPic = document.createElement("div");
                oPic.className = 'pic';
                oBox.appendChild(oPic);
                var oImg = document.createElement("img");
                oImg.src = "images/"+dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterFall('main','box');
        }
    }
};
function waterFall(parent,box){
    var par = document.getElementById(parent);
    //将main 下的所有class为box的元素取出来
    var oBoxs = getByClass(par,box);//oBoxs 为所有class=box 的元素

    //计算整个页面显示的列数（页面宽/box的宽）
    var oBoxW = oBoxs[0].offsetWidth;//oBoxW 为页面上每个图片的宽度（等宽不等高）
    var cols = Math.floor(par.clientWidth/oBoxW);//cols 为整个页面显示的宽度

    //计算一排图片的高度
    var hArr = [];
    for(var i = 0;i <oBoxs.length;i++) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);//hArr 计算一排图片的高度
        } else {
            var minH = Math.min.apply(null, hArr);//minH 一行中高度最小
            // 计算它的索引
            var index = getMinhIndex(hArr, minH);//index 一行中高度最小的索引

            //将第二行的第一张图片定位到第一行图片中高度最小的下面
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //循环
            hArr[index] += oBoxs[i].offsetHeight;
        }
    }
}

function getByClass(parent,clsName){
    var arr = new Array();
    var arrCls = parent.getElementsByTagName("*");
    for(var i = 0;i < arrCls.length;i++){
        if(arrCls[i].className == clsName){
            arr.push(arrCls[i]);
        }
    }
    return arr;
}
function getMinhIndex(arr,val){
    for(var i = 0;i <arr.length;i++){
        if(arr[i] == val){
            return i;
        }
    }
}
function checkScrollSlide(){
    var par = document.getElementById('main');
    var oBoxs = getByClass(par,'box');
    var lastBoxH = oBoxs[oBoxs.length-1].offsetHeight + Math.floor(oBoxs[oBoxs.length-1].height/2);
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop;
    var webH = document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH < scrollH+webH) ? true:false;
}