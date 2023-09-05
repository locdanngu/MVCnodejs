
// Show Search Suggest
$('.header__search-input').focus(function () {
    $('.header__search-suggest').fadeIn();
});
$('.header__search-input').blur(function () {
    $('.header__search-suggest').fadeOut();
});


$(document).ready(function() {
    // Show Nav Mobile
    $('.nav__mobile--show-btn').click(function() {
        $('.nav__mobile').addClass('show-nav__mobile');
        $('.nav_overlay').addClass('show-overlay');
    });

    $('.nav__mobile-close, .nav_overlay').click(function() {
        $('.nav__mobile').removeClass('show-nav__mobile');
        $('.nav_overlay').removeClass('show-overlay');
    });

    // Show Change Languages
    $('.header__nav-language').click(function() {
        $('.change__languages').toggleClass('show');
    });

    // Show Mobile Languages
    $('.nav__mobile-language').click(function() {
        $('.mobile__language').toggleClass('show-language');
    });
});

// Loader Page
$(window).on('load', function (e) {
    $('.loader').delay(1000).fadeOut('lows');
});