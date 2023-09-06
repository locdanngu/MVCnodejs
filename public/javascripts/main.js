
// Show Search Suggest
$('.header__search-input').focus(function () {
    $('.header__search-suggest').fadeIn();
});
$('.header__search-input').blur(function () {
    $('.header__search-suggest').fadeOut();
});


$(document).ready(function () {
    // Show Nav Mobile
    $('.nav__mobile--show-btn').click(function () {
        $('.nav__mobile').addClass('show-nav__mobile');
        $('.nav_overlay').addClass('show-overlay');
    });

    $('.nav__mobile-close, .nav_overlay').click(function () {
        $('.nav__mobile').removeClass('show-nav__mobile');
        $('.nav_overlay').removeClass('show-overlay');
    });

    // Show Change Languages
    $('.header__nav-language').click(function () {
        $('.change__languages').toggleClass('show');
    });

    // Show Mobile Languages
    $('.nav__mobile-language').click(function () {
        $('.mobile__language').toggleClass('show-language');
    });
});

// Loader Page
$(window).on('load', function (e) {
    $('.loader').delay(1000).fadeOut('lows');
});


$('#searchcity').on('input click', function () {
    const searchValue = $(this).val();

    $.ajax({
        url: '/search', // Địa chỉ URL của tệp route hoặc API trên máy chủ Node.js
        method: 'GET',
        data: { q: searchValue },
        success: function (data) {
            // Xử lý dữ liệu trả về và hiển thị trên giao diện
            $('#ketquatimkiem').empty();
            let htmlResult = ''; // Khởi tạo biến để tích luỹ chuỗi HTML

            data.forEach(function (cities) {
                // Tạo chuỗi HTML cho mỗi thành phố và nối vào biến htmlResult
                htmlResult += '<li class="search__suggest-item">';
                htmlResult += '<div class="search__suggest-thumbnail">';
                htmlResult += '<img src="' + cities.imagecity + '" alt="" class="search__suggest-thumbnail-img">';
                htmlResult += '</div>';
                htmlResult += '<div class="search__suggest-content">';
                htmlResult += '<p class="search__suggest-title">' + cities.namecity + '</p>';
                htmlResult += '<small>6 Chỗ ở</small>';
                htmlResult += '</div>';
                htmlResult += '</li>';
            });

            // In chuỗi HTML ra searchResults
            $('#ketquatimkiem').html(htmlResult);
        },
        error: function (error) {
            console.error(error);
        },
    });
});
