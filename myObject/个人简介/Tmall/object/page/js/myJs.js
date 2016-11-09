/**
 * Created by Administrator on 2016/10/8.
 */

window.onload = function () {
        function boxinfo(liId,boxId){
            var li = document.getElementById(liId);
            var box = document.getElementById(boxId);
            li.onmousemove = function () {
                box.style.display = "block";
                this.style.backgroundColor = "white";
            };
            li.onmouseout = function () {
                box.style.display = "none";
                this.style.backgroundColor = "#f2f2f2";
            }
        }

        boxinfo("mytaobao","box1");
        boxinfo("favorite","box2");
        boxinfo("code","box3");
        boxinfo("sel","box4");
        boxinfo("navi","box5");



    //内容区域的js


    var content = document.getElementById('content');
//            console.log(content);
//            console.log(content.childNodes);
    var  lis1 = content.childNodes[1].getElementsByTagName('li');
    var lis2 = content.childNodes[3].getElementsByTagName('li');
    var divs = document.getElementsByClassName('bottom');
//            console.log(divs);
//写一个函数  把所想实现的效果写进去 然后调用
    function shaDow(id){
        for(var i = 0; i < id.length; i++){
            id[i].index = i;
//                    console.log(id[i].index);
            id[i].onmouseover = function(){
//                        这个循环实现的是清楚作用
                for(var i = 0; i < id.length; i++){
                    id[i].style.boxShadow = '0 0 0';
                }
                id[this.index].style.boxShadow = "0px 0px 2px 2px  #888";

            }


        }
    }
    shaDow(lis1);
    shaDow(lis2);
    shaDow(divs);


//固定侧边栏
    var img = new Image();
    img = ["images/ac1.png","images/ac2.png","images/ac3.png", 'images/ac4.png','images/ac5.png','images/ac6.png','images/ac7.png', 'images/ac8.png','images/ac9.png','images/ac10.png'];

    var num = ["images/特权.png","images/yougouwuche.png","images/钱.png", "images/心.png","images/星.png","images/表.png","images/充.png", "images/反馈.png","images/大礼包.png","images/回顶部.png"];
    var sidebar = document.getElementById('sidebar');
    var box = document.getElementById('box');
    var imgs = sidebar.getElementsByTagName('img');
    var show = box.getElementsByTagName('div');
    console.log(imgs);
    console.log(show);
    for(var i = 0; i < imgs.length; i++ ){
        imgs[i].index = i;
        imgs[i].onmouseover = function(){
//                     清空
            for(var i = 0; i < show.length; i++){
                show[i].style.display = 'none';
                show[i].style.right = '100px';
            }
            imgs[this.index].setAttribute('src',img[this.index]);
            show[this.index].style.display = 'block';
            show[this.index].style.right = '25px';

        }
        imgs[i].onmouseout = function(){
            show[this.index].style.display = 'none';
            show[this.index].style.right = '100px';
            imgs[this.index].setAttribute('src',num[this.index]);


        }
    }

    }
