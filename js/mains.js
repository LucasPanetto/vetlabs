jQuery(document).ready(function($){
    //FIXAR HEADER
    window.onscroll = function(){
        if (window.pageYOffset > 140){
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
        }
    }

});