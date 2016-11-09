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
    //��main �µ�����classΪbox��Ԫ��ȡ����
    var oBoxs = getByClass(par,box);//oBoxs Ϊ����class=box ��Ԫ��

    //��������ҳ����ʾ��������ҳ���/box�Ŀ�
    var oBoxW = oBoxs[0].offsetWidth;//oBoxW Ϊҳ����ÿ��ͼƬ�Ŀ�ȣ��ȿ��ȸߣ�
    var cols = Math.floor(par.clientWidth/oBoxW);//cols Ϊ����ҳ����ʾ�Ŀ��

    //����һ��ͼƬ�ĸ߶�
    var hArr = [];
    for(var i = 0;i <oBoxs.length;i++) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);//hArr ����һ��ͼƬ�ĸ߶�
        } else {
            var minH = Math.min.apply(null, hArr);//minH һ���и߶���С
            // ������������
            var index = getMinhIndex(hArr, minH);//index һ���и߶���С������

            //���ڶ��еĵ�һ��ͼƬ��λ����һ��ͼƬ�и߶���С������
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //ѭ��
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