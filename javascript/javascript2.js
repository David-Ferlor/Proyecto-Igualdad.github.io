$(document).ready(function() {
    $('#nav-principal').hide(0);
    
    
            $(window).scroll(function(){
                    var windowHeight = $(window).scrollTop();
                    var contenido2 = $("#pag-main").offset();
                    contenido2 = contenido2.top;
    
                        if(windowHeight >= contenido2  ){
                        $('#nav-principal').fadeIn(500);
    
                        }else{
                        $('#nav-principal').fadeOut(500);
                    }
                        });
                    });