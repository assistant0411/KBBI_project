$(".c-usage-accordion").click(function(){
    $(this).toggleClass("js-active");
})

jQuery('a[href^=\\#]').on('click', function(event){
    event.preventDefault();
    jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top - 100}, 300);
});
jQuery('a[href^=\\#]').on('click', function(event){
    event.preventDefault();
    jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top - 100}, 300);
});
