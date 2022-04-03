jQuery(document).ready(function(){

    $('.imgslide a:gt(0)').hide();

    setInterval(function(){

        $('.imgslide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgslide');}, 3000);
});