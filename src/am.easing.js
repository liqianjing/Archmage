/**
 * 事件模块
 *
 * @author      deasel(deasel21@gmail.com)
 * @version     2014-12-19
 * @version     0.0.1
 *
 * @depend      am.base.js  am.type.js   am.dom.js
 * 本模块接受一个参数，为对象;里面包含4个资源，target ： 运动的对象;len ： 运动的距离;path ： 运动的方向;speed ： 运动的时间;
 */
AM.$package(function (am) {

    var $T = am.type,
        $D = am.dom,
        $G = $D.getStyle;

    //实现缓动的效果(用于上下左右的切换)

    am.easing = function(param){
        if($T.isObject(param)){

            //参数分别是运动的对象，运动的长度，运动的方向，一个动画完成需要的时间
            var target = param.target,
                len = parseInt(param.len,10) || 0,
                path = param.path || 'left',
                speed = param.speed || 2000,
                leftLen = parseInt($G(target,'left'),10),
                topLen = parseInt($G(target,'top')),
                paths = null,
                stopLen = null;
            //这一部分是确认结束的位置
            if(path === 'left'){
                stopLen = leftLen + len;
            }else if(path === 'right'){
                stopLen = leftLen - len;
            }else if(path === 'top'){
                stopLen = topLen + len;
            }else {
                stopLen = topLen - len;
            }
            //计算运动的时间及每一毫秒运动的距离
            var time = speed / len;

            //运动的过程
            setInterval(function(){
                if(path === 'left'){
                    if(leftLen < stopLen){
                        leftLen = leftLen + 1;
                        $D.setStyle(target,'left',leftLen + 'px');
                    }else {
                        return;
                    }
                }else if(path === 'right'){
                    if(leftLen > stopLen){
                        leftLen = leftLen - 1;
                        $D.setStyle(target,'left',leftLen + 'px');
                    }else {
                        return;
                    }
                }else if(path === 'top'){
                    if(topLen < stopLen){
                        topLen = topLen + 1;
                        $D.setStyle(target,'top',topLen + 'px');
                    }else {
                        return;
                    }
                }else if(path === 'bottom'){
                    if(topLen > stopLen){
                        topLen = topLen - 1;
                        $D.setStyle(target,'top',topLen + 'px');
                    }else {
                        return;
                    }
                }
            },time);
        };
    }
});
