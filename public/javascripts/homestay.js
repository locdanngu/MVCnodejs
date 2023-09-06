// Show Search Suggest
$('#searchcity2').focus(function () {
    $('#ketquainput2').fadeIn();
});
$('#searchcity2').blur(function () {
    $('#ketquainput2').fadeOut();
});

$('#searchcity2').on('input click', function () {
    const searchValue = $(this).val();

    $.ajax({
        url: '/search', // Địa chỉ URL của tệp route hoặc API trên máy chủ Node.js
        method: 'GET',
        data: { q: searchValue },
        success: function (data) {
            // Xử lý dữ liệu trả về và hiển thị trên giao diện
            $('#ketquatimkiem2').empty();
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
            $('#ketquatimkiem2').html(htmlResult);
        },
        error: function (error) {
            console.error(error);
        },
    });
});

$('#explore-slider').owlCarousel({
    items: 3,
    loop: true,
    margin: 16,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left   owl__nav-icon'>",
        "<i class='fa fa-angle-right  owl__nav-icon'>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 2
        },
        1239: {
            items: 2
        }
    }
});

$('#content-slider').owlCarousel({
    items: 5,
    loop: true,
    margin: 16,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left   owl__nav-icon'>",
        "<i class='fa fa-angle-right  owl__nav-icon'>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 6
        },
        1239: {
            items: 6
        }
    }
});