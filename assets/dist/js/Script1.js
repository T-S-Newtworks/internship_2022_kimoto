$(document).ready(function(){
    photoSize();
});

function photoSize(){
    if(window.matchMedia('(min-width: 768px)').matches) {
        $(".photo").colorbox({
            width:"60%",
        });
    }else{
        $(".photo").colorbox({
            width:"100%",
        });
}
}
