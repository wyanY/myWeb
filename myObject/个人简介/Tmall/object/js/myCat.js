/**
 * Created by Administrator on 2016/10/8.
 */

        var img = new Image();
        img = ["images/ac1.png","images/ac2.png","images/ac3.png", 'images/ac4.png','images/ac5.png','images/ac6.png','images/ac7.png', 'images/ac8.png','images/ac9.png','images/ac10.png'];

        var num = ["images/特权.png","images/yougouwuche.png","images/钱.png", "images/心.png","images/星.png","images/表.png","images/充.png", "images/反馈.png","images/大礼包.png","images/回顶部.png"];
        var sidebar1 = document.getElementById('sidebar1');
        var box = document.getElementById('box');
        var imgs = sidebar1.getElementsByTagName('img');
        var show = box.getElementsByTagName('div');
        console.log(imgs);
        console.log(show);
        for(var i = 0; i < imgs.length; i++ ){
            imgs[i].index = i;
            imgs[i].onmouseover = function(){

                for(var i = 0; i < show.length; i++){
                    show[i].style.display = 'none';
                    show[i].style.right = '100px';
                }
                imgs[this.index].setAttribute('src',img[this.index]);
                show[this.index].style.display = 'block';
                show[this.index].style.right = '25px';

            }
            imgs[i].onmouseout = function(){

                /* for(var i = 0; i < show.length; i++){
                 show[i].style.display = 'none';
                 show[i].style.right = '100px';
                 }*/
                show[this.index].style.display = 'none';
                show[this.index].style.right = '100px';
                imgs[this.index].setAttribute('src',num[this.index]);


            }
        }


