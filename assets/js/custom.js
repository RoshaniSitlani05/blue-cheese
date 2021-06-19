//add active to navbar
$(".navbar li a").each(function(){
    var sCurrentPath = this.href.split('/').pop();
    $(this).removeClass('active');
    if(sCurrentPath === sPath){
        $(this).addClass('active');
    }
});