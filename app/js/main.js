var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.menu-btn__header-top').on('click', function(){
    $('.portable-menu-wrap__nav').toggleClass('active');
})

$('.to-close-btn').on('click', function(){
    $('.portable-menu-wrap__nav').removeClass('active');
})

$('.contacts-btn__header-top').on('click', function(){
    $('.portable-menu-wrap__contacts').toggleClass('active');
})

$('.to-close-btn').on('click', function(){
    $('.portable-menu-wrap__contacts').removeClass('active');
})

$('.btn__portable-menu-call').on('click', function(){
    $('.portable-menu-wrap__contacts').removeClass('active');
})

$('.search-btn__header-top').on('click', function(){
    $('.search__header-top').toggleClass('switch');
})

$('.btn__filter').on('click', function(){
    $('.filter-wrap__mobile-active').toggleClass('switch');
})

$('.to-close-btn').on('click', function(){
    $('.filter-wrap__mobile-active').removeClass('switch');
})