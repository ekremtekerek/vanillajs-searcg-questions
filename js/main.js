function changePhoto(element) {
   let elementIndex = element.index()
   if(elementIndex === 1) {
     element.parents('.showcase').find('.showcaseImg > div:first-child').addClass('removeImg');
   }else {
     element.parents('.showcase').find('.showcaseImg > div:first-child').removeClass('removeImg'); 
   }
}


$(function(){
    $('.changeImg').mouseenter(function(){
        changePhoto($(this))
    });

    $("#hamburger-icon").click(function(){
        $(".slide-menu").toggleClass("slide-left");
        $(".bodyOverlay").addClass("active");
    });
        
    $('.slide-close-button button, .mdl-layout__obfuscator').click(function(){
        $(".slide-menu").removeClass("slide-left");
        $(".bodyOverlay").removeClass("active");
    });
    
        $(".dropdownmenu").click(function(){
        $(".sub-menu").toggleClass("active"),fadeIn(46000);
    });
})


