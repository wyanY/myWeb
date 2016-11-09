/**
 * Created by Administrator on 2016/10/6.
 */
window.onload = function(){

    var leftSlide1 = document.getElementById('leftSlide1');
    var img1 = leftSlide1.getElementsByTagName('img');
    var ctn1 = leftSlide1.getElementsByTagName('div')[0];

    var leftSlide2 = document.getElementById('leftSlide2');
    var img2 = leftSlide2.getElementsByTagName('img');
    var ctn2 = leftSlide2.getElementsByTagName('div')[0];

    var leftSlide3 = document.getElementById('leftSlide3');
    var img3 = leftSlide3.getElementsByTagName('img');
    var ctn3 = leftSlide3.getElementsByTagName('div')[0];

    var leftSlide4 = document.getElementById('leftSlide4');
    var img4 = leftSlide4.getElementsByTagName('img');
    var ctn4 = leftSlide4.getElementsByTagName('div')[0];

    var leftSlide5 = document.getElementById('leftSlide5');
    var img5 = leftSlide5.getElementsByTagName('img');
    var ctn5 = leftSlide5.getElementsByTagName('div')[0];

    var leftSlide6 = document.getElementById('leftSlide6');
    var img6 = leftSlide6.getElementsByTagName('img');
    var ctn6 = leftSlide6.getElementsByTagName('div')[0];


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



    //图片的透明度与文字颜色的改变
    function leftPic(left,img,ctn){
        left.onmouseover = function(){
            img[0].className = "current";
            ctn.style.color = 'red';
        };
        left.onmouseout = function(){
            img[0].className = '';
            ctn.style.color = 'black';
        };
    }
    leftPic(leftSlide1,img1,ctn1);
    leftPic(leftSlide2,img2,ctn2);
    leftPic(leftSlide3,img3,ctn3);
    leftPic(leftSlide4,img4,ctn4);
    leftPic(leftSlide5,img5,ctn5);
    leftPic(leftSlide6,img6,ctn6);


    var item = document.getElementsByClassName('slide_item');

    //文字的轮播跳转
    var num = 0;
    var timer = null;
    var timer1 = null;
    timer = setTimeout(function(){
        timer1 = setInterval(titleCtn,50);
    },5000);
    function titleCtn() {
        num = num - 5;
        num <= -90 ? num = 0 : num;
        item[0].style.marginTop = num + 'px';
        item[4].style.marginTop = num + 'px';
        item[8].style.marginTop = num + 'px';
        item[12].style.marginTop = num + 'px';
        item[16].style.marginTop = num + 'px';
        item[20].style.marginTop = num + 'px';

        if(num % 30 == 0){
            clearInterval(timer1);
            timer = setTimeout(function(){
                timer1 = setInterval(titleCtn,50);
            },5000);
        }
    }

    //图片的移动
    var pic1 = document.getElementById("pic1");
    var pht1 = pic1.getElementsByClassName("pht");
    var img11 = pic1.getElementsByTagName('img');
    var pis1 = document.getElementById("pis1");
    var rightRow1 = pis1.getElementsByClassName('right_row');
    var img12 = pis1.getElementsByTagName('img');

    var pic2 = document.getElementById("pic2");
    var pht2 = pic2.getElementsByClassName("pht");
    var img21 = pic2.getElementsByTagName('img');
    var pis2 = document.getElementById("pis2");
    var rightRow2 = pis2.getElementsByClassName('right_row');
    var img22 = pis2.getElementsByTagName('img');

    var pic3 = document.getElementById("pic3");
    var pht3 = pic3.getElementsByClassName("pht");
    var img31 = pic3.getElementsByTagName('img');
    var pis3 = document.getElementById("pis3");
    var rightRow3 = pis3.getElementsByClassName('right_row');
    var img32 = pis3.getElementsByTagName('img');

    var pic4 = document.getElementById("pic4");
    var pht4 = pic4.getElementsByClassName("pht");
    var img41 = pic4.getElementsByTagName('img');
    var pis4 = document.getElementById("pis4");
    var rightRow4 = pis4.getElementsByClassName('right_row');
    var img42 = pis4.getElementsByTagName('img');

    var pic5 = document.getElementById("pic5");
    var pht5 = pic5.getElementsByClassName("pht");
    var img51 = pic5.getElementsByTagName('img');
    var pis5 = document.getElementById("pis5");
    var rightRow5 = pis5.getElementsByClassName('right_row');
    var img52 = pis5.getElementsByTagName('img');

    var pic6 = document.getElementById("pic6");
    var pht6 = pic6.getElementsByClassName("pht");
    var img61 = pic6.getElementsByTagName('img');
    var pis6 = document.getElementById("pis6");
    var rightRow6 = pis6.getElementsByClassName('right_row');
    var img62 = pis6.getElementsByTagName('img');


    function picMove(p,img){
        for(var i = 0; i < p.length;i++){
            p[i].index = i;
            p[i].onmouseover = function(){
                for(var j = 0;j < p.length;j++){
                    img[j].style.transition = 'right 1s';
                    img[j].style.right = '0';
                }
                img[this.index].style.transition = 'right 1s';
                img[this.index].style.right = '10px';
            };
            p[i].onmouseout = function(){
                img[this.index].style.transition = 'right 1s';
                img[this.index].style.right = '0';
            }
        }
    }
    picMove(pht1,img11);
    picMove(rightRow1,img12);

    picMove(pht2,img21);
    picMove(rightRow2,img22);

    picMove(pht3,img31);
    picMove(rightRow3,img32);

    picMove(pht4,img41);
    picMove(rightRow4,img42);

    picMove(pht5,img51);
    picMove(rightRow5,img52);

    picMove(pht6,img61);
    picMove(rightRow6,img62);

    //侧边栏设置

    var sidebar = document.getElementById("sidebar");
    var kids = document.getElementById("kids");
    var outdoors = document.getElementById("outdoors");
    var home = document.getElementById("home");
    var grocery = document.getElementById("grocery");
    var electronics = document.getElementById("electronics");
    var fashion = document.getElementById("fashion");
    var love = document.getElementById("love");
    var ais = sidebar.getElementsByTagName('a');
    var attached = document.getElementById("attached");

    var leader = 0, target = 0,top = 0;
    window.onscroll = function(){
        top = document.body.scrollTop;
        for(var i = 0;i < ais.length;i++){
            if(top >= (love.offsetTop -250)){
                ais[i].style.backgroundColor = '#626262';
                ais[6].style.backgroundColor = '#dd2727';
            }
            else if(top >= (fashion.offsetTop - 250)) {
                ais[i].style.backgroundColor = '#626262';
                ais[5].style.backgroundColor = '#ea5f8d';
            }
            else if(top >= (electronics.offsetTop -250)) {
                ais[i].style.backgroundColor = '#626262';
                ais[4].style.backgroundColor = '#0aa6e8';
            }
            else if(top >= (grocery.offsetTop - 250)) {
                ais[i].style.backgroundColor = '#626262';
                ais[3].style.backgroundColor = '#64c333';
            }
            else if(top >= (home.offsetTop -250)) {
                ais[i].style.backgroundColor = '#626262';
                ais[2].style.backgroundColor = '#f15453';
            }
            else if(top >= (outdoors.offsetTop -250)) {
                ais[i].style.backgroundColor = '#626262';
                ais[1].style.backgroundColor = "#19c8a9";
            }
            else if(top >= (kids.offsetTop - 250)) {
                ais[i].style.backgroundColor = '#626262';
                ais[0].style.backgroundColor = "#f7a945";
            }
            else if(top >= 600){
                sidebar.style.display = 'block';
                attached.style.display = "block";
            }
            else{
                sidebar.style.display = 'none';
                attached.style.display = "none";
            }
        }

        //timer2 = setInterval(sides,20);
        sides();
    };
    var arr = [kids,outdoors,home,grocery,electronics,fashion,love] ;



    function sides (){
        var timer2 = null;
        leader = top;
        for(var i = 0; i < ais.length;i++){
            ais[i].index = i;
            ais[i].onclick = function(){
                clearInterval(timer2);
                console.log(this.index);
                (function Index(target){
                    timer2 = setInterval(function(){
                        leader = leader + (target - leader) / 3;
                        if(leader == target){
                            clearInterval(timer2);
                            console.log(leader);
                        }
                        window.scrollTo(0,leader);
                    },30)
                })(arr[this.index].offsetTop -60);

            }
        }

    }
};