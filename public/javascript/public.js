var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
$("html,body").css("fontSize",(windowWidth/640)*40 + 'px');
$(function(){
    // $.get 测试 点击切换内容
    $('#Btn1').on('click',function(){
        $.get("/layout.jade",function(res){
            console.log(res);
            $('.div1').html(res);
        });
    });
});
