//用来实现rem布局
function remSize() { //设置rem的函数
    //获取设备宽度
    var deviceWidth= document.documentElement.clientWidth || window.innerWidth//document指的是html文件，这里就是获取页面可见区域的宽度
                                                                             //window.innerWidth表示获取当前窗口的宽度，包括滚动条，当窗口调整时，这个获取的值也会随之改变
    //判断设备宽度
    if(deviceWidth>=750) {//假设设备屏幕宽度大于750时，就都当作750屏幕来显示
        deviceWidth = 750;
    }
    if(deviceWidth <= 320) {
        deviceWidth = 320;
    }

    //设计rem,750px时： 1rem = 100px， 375px时， 1rem = 50px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';

    //设置字体大小,因为此时获取的不再是网页而是body内容（字体是body里的而不是窗口文件），所以要用querySelector
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

remSize();


window.onresize = function() {
//当窗口发生改变时就进行调用适配
    remSize();
}