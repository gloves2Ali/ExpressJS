var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
$("html,body").css("fontSize",(windowWidth/640)*40 + 'px');
$(function(){
    // 拖拽返回按钮
    (function(){
        var tar = '#back-bar'; // 按钮id
        var $tar = $(tar);
        if($(tar).size() > 0){
            var start = new Date();
            var end;
            $tar.on('touchstart',function(){
                start = new Date();
            });
            $tar.on('touchend',function(){
                end = new Date();
                if((end - start) < 300) {
                    window.history.back(-1);
                    console.log('返回');
                }
            });

            var ww = $(window).width(); // 屏幕宽高
            var wh = $(window).height();
            var dx,dy;
            var dot_w = $(tar).width(); // 按钮宽高
            var dot_h = $(tar).height();
            var pos_x = ww*.05; // 初始位置
            var pos_y = wh*.05;

            // 拖拽
            touch.on(tar, 'drag', function(ev){
                dx = dx || 0;
                dy = dy || 0;
                var offx = dx + ev.x + "px";
                var offy = dy + ev.y + "px";
                //console.log(offx+","+offy);
                var adsorb = 8; // 距离屏幕边缘的边距，会被吸附到边缘
                //检测是否到4个屏幕边缘
                if(parseFloat(offx)+dot_w - pos_x + dot_w >= ww - adsorb){
                    offx = ww - dot_w - pos_x + "px";
                }
                if(parseFloat(offx) + pos_x <= adsorb){
                    offx = -pos_x + "px";
                }
                if(parseFloat(offy)+2*dot_h >= wh - adsorb){
                    offy = wh - dot_h - pos_y + "px";
                }
                if(parseFloat(offy) + pos_y <= adsorb){
                    offy = -pos_y + "px";
                }
                this.style.webkitTransform = "translate3d("+ offx +","+ offy +",0)";
            });
            // 拖拽结束
            touch.on(tar, 'dragend', function(ev){
                dx += ev.x;
                dy += ev.y;
            });

        }
    })();

});
