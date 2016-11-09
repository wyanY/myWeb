/**
 * Created by Administrator on 2016/10/4.
 */

    //小猫hover
function picHover(){
    var oULHover = document.getElementById('list1');
    var aHoverA = oULHover.getElementsByTagName('a');
    var aHoverPic = oULHover.getElementsByTagName('div');

    var timer1 = null;
    var leader = 0, target = -10;

    for(var i = 0; i < aHoverPic.length; i ++){
        aHoverA[i].index = i;

        aHoverA[i].onmouseover = function () {
            clearInterval(timer1);
            var that = this.index;
            timer1 = setInterval(function () {

                leader = leader + (target - leader) / 10;
                aHoverPic[that].style.top = leader + 'px';

            },30);
            leader = 0;   // 当定时器开时, leader = 10 ; 如果不更改leader 的值 , leader 就会一直是 10

            aHoverPic[this.index].style.display = 'block';
        };

        aHoverA[i].onmouseout = function () {
            clearInterval(timer1);

            aHoverPic[this.index].style.top = 0;
            aHoverPic[this.index].style.display = 'none';
        }
    }
}
picHover();



//producesList -- 商品分类

var aProducesLi = document.getElementsByClassName('produce-li');
var aProduceMenu = document.getElementsByClassName('produce-menu');
var aProMenuCon = document.getElementsByClassName('proMenu-con');

var that1 = null, that2 = null;
var tag = 0;
var timerMenu = null;

for(var i = 0; i < aProducesLi.length; i ++){

    aProducesLi[i].index  = i;
    aProduceMenu[i].index  = i;

    aProducesLi[i].onmouseover = function () {

        that1 = this;
        showMenu(this.index,that1);
    };

    aProducesLi[i].onmouseout = function () {
        that2 = this;
        hideMenu(this.index,that2);
    };

    aProduceMenu[i].onmouseover = function () {
        showMenu(this.index,that1);
    };
    aProduceMenu[i].onmouseout = function () {
        hideMenu(this.index,that2);
    };

}


function hideMenu(index,ele){

    //加定时器就是为了 让鼠标有时间移到出现的那个盒子上
    timerMenu = setTimeout(function () {
        aProduceMenu[index].style.display = 'none';
    },200);

    ele.style.backgroundColor = '#e3e2e2';
    ele.style.opacity = '.9';
    ele.style.color = '#696868';
}

function showMenu(index,ele){
    clearTimeout(timerMenu);  //  先发生的 li鼠标移除事件 , 再发生的时 div鼠标移入事件, 故要先清定时器
    for(var i = 0; i < aProduceMenu.length; i ++){
        aProduceMenu[i].style.display = 'none';
    }
    aProduceMenu[index].style.display = 'block';

    ele.style.backgroundColor = '#fff';
    ele.style.opacity = '1';
    var aProMenuLi = aProMenuCon[index].getElementsByTagName('li');
    if(ele.index % 3 == 0){
        ele.style.color = '#e54077';

        for(var i = 0 ; i < aProMenuLi.length; i ++){
            if(i % 4 == 0){
                aProMenuLi[i].style.color = '#e54077';
            }

            aProMenuLi[i].onmouseover = function(){
                this.style.color = '#e54077'
            };
            aProMenuLi[i].onmouseout = function(){
                this.style.color = '#606868'
            }
        }

    }else{
        ele.style.color = 'blue';
        for(var j = 0 ; j < aProMenuLi.length; j ++){
            if(j % 3 == 0 && j != 0){
                aProMenuLi[j].style.color = 'blue';
            }

            aProMenuLi[j].onmouseover = function(){
                this.style.color = 'blue'
            };
            aProMenuLi[j].onmouseout = function(){
                this.style.color = '#606868'
            }
        }

    }
}







