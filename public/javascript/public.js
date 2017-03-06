var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
$("html,body").css("fontSize",(windowWidth/640)*40 + 'px');
$(function(){
    var schools =
        [
            {"students":"Jack","room":"301","teacher":"Steven"},
            {"students":"Bob","room":"502","teacher":"James"}
        ];
    console.log(schools);
});
