/**
 * 事件模块
 *
 * @author      deasel(deasel21@gmail.com)
 * @version     2014-12-19
 * @version     0.0.1
 *
 * @depend      am.base.js  am.type.js   am.dom.js
 */
AM.$package(function (am) {

    var $T = am.type,
        $D = am.dom;

    //通过定时器来改变opacity
    am.fade = {
        //渐渐显示（fadeIn）
        fadein : function (ele, opacity, speed) {//第一个参数是执行操作的元素; 第二个参数是透明度; 第三个参数是时间

            if (ele && $T.isNumber(opacity)) {

                //获取元素当前的opacity
                var eOpacity = $D.getStyle(ele,'opacity');

                if(eOpacity < 1) {
                    eOpacity = parseInt(eOpacity,10);
                }else {
                    return;
                }

                //处理参数
                var speed = ($T.isNumber(speed) && speed > 0) ? speed : 2000,
                    count = speed / 100,
                    avg = opacity / count, //每一次变换的值
                    timer;

                //定义定时器渐变透明度
                timer = setInterval(function () {
                    if (eOpacity < opacity) {
                        eOpacity += avg;

                        $D.setStyle(ele,'opacity',eOpacity);
                    } else {
                        clearInterval(timer);
                    }
                }, 100);
            }
        },

        //渐渐隐藏（fadeOut）
        fadeout : function (ele,opacity,speed){
            //第一个参数是执行操作的元素; 第二个参数是透明度; 第三个参数是时间
            if(ele && $T.isNumber(opacity)){

                //获取当前的元素透明度
                var eOpacity = $D.getStyle(ele,'opacity');

                if (eOpacity <= 1 && eOpacity > 0) {
                    eOpacity = parseInt(eOpacity,10);
                }

                //处理参数
                var speed = ($T.isNumber(speed) && speed > 0) ? speed : 2000,
                    count = speed / 100,
                    avg = eOpacity / count,
                    timer;

                //定义定时器渐变透明度
                timer = setInterval(function () {
                    if (eOpacity > opacity) {
                        eOpacity -= avg;
                        $D.setStyle(ele,'opacity',eOpacity);
                    } else {
                        clearInterval(timer);
                    }
                }, 100);
            }
        }
    };
});
