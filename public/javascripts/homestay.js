// Show Search Suggest
$('#searchcity2').focus(function () {
    $('#ketquainput2').fadeIn();
});
$('#searchcity2').blur(function () {
    $('#ketquainput2').fadeOut();
});

$('#ketquainput2').on('click', 'li', function () {
    // Lấy tên thành phố từ thẻ p có class "search__suggest-title" trong phần tử li được nhấn
    var cityName = $(this).find('.search__suggest-title').text();

    // Gán tên thành phố vào value của input có id "searchcity2"
    $('#searchcity2').val(cityName);
    // var originalHTML = $('#changecontent').html(); // Lưu nội dung ban đầu

    $('#changecontent').css({
        'min-height': '500px',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    });

    // Tạo đoạn mã HTML mới
    var newHTML = `
            <div id="wifi-loader">
                <svg class="circle-outer" viewBox="0 0 86 86">
                    <circle class="back" cx="43" cy="43" r="40"></circle>
                    <circle class="front" cx="43" cy="43" r="40"></circle>
                    <circle class="new" cx="43" cy="43" r="40"></circle>
                </svg>
                <svg class="circle-middle" viewBox="0 0 60 60">
                    <circle class="back" cx="30" cy="30" r="27"></circle>
                    <circle class="front" cx="30" cy="30" r="27"></circle>
                </svg>
                <svg class="circle-inner" viewBox="0 0 34 34">
                    <circle class="back" cx="17" cy="17" r="14"></circle>
                    <circle class="front" cx="17" cy="17" r="14"></circle>
                </svg>
                <div class="text" data-text="Đang Tìm"></div>
            </div>
        `;

    // Thay đổi nội dung của div có id "changecontent" sau 2 giây
    $('#changecontent').html(newHTML);
    // setTimeout(function () {
    //     // Sau 2 giây, quay lại nội dung ban đầu
    //     $('#changecontent').html(originalHTML);
    //     $('#changecontent').css({
    //         'min-height': '',
    //         'display': '',
    //         'justify-content': '',
    //         'align-items': ''
    //     });
    //     $('#changecontent').show(); // Hiển thị nội dung ban đầu
    // }, 2500);
});

$('#searchcity2').on('input click', function () {
    const searchValue = $(this).val();

    $.ajax({
        url: '/homestay/search', // Địa chỉ URL của tệp route hoặc API trên máy chủ Node.js
        method: 'GET',
        data: { q: searchValue },
        success: function (data) {
            // Xử lý dữ liệu trả về và hiển thị trên giao diện
            $('#ketquatimkiem2', '#ketquatimkiem3', '#ketquatimkiem4').empty();
            let htmlResult = ''; // Khởi tạo biến để tích luỹ chuỗi HTML
            let htmlResult2 = '';
            let htmlResult3 = '';
            data.forEach(function (cities, index) {
                // Check if the index is less than 6 to limit the loop
                if (index < 6) {
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
                } else {
                    // Exit the loop when it reaches 6 iterations
                    return false;
                }
            });

            data.forEach(function (cities, index) {
                // Check if the index is between 6 and 11 (inclusive) to limit the loop
                if (index >= 6 && index <= 11) {
                    // Tạo chuỗi HTML cho mỗi thành phố và nối vào biến htmlResult2
                    htmlResult2 += '<li class="search__suggest-item">';
                    htmlResult2 += '<div class="search__suggest-thumbnail">';
                    htmlResult2 += '<img src="' + cities.imagecity + '" alt="" class="search__suggest-thumbnail-img">';
                    htmlResult2 += '</div>';
                    htmlResult2 += '<div class="search__suggest-content">';
                    htmlResult2 += '<p class="search__suggest-title">' + cities.namecity + '</p>';
                    htmlResult2 += '<small>6 Chỗ ở</small>';
                    htmlResult2 += '</div>';
                    htmlResult2 += '</li>';
                }
            });

            data.forEach(function (cities, index) {
                // Check if the index is between 12 and 17 (inclusive) to limit the loop
                if (index >= 12 && index <= 17) {
                    // Tạo chuỗi HTML cho mỗi thành phố và nối vào biến htmlResult3
                    htmlResult3 += '<li class="search__suggest-item">';
                    htmlResult3 += '<div class="search__suggest-thumbnail">';
                    htmlResult3 += '<img src="' + cities.imagecity + '" alt="" class="search__suggest-thumbnail-img">';
                    htmlResult3 += '</div>';
                    htmlResult3 += '<div class="search__suggest-content">';
                    htmlResult3 += '<p class="search__suggest-title">' + cities.namecity + '</p>';
                    htmlResult3 += '<small>6 Chỗ ở</small>';
                    htmlResult3 += '</div>';
                    htmlResult3 += '</li>';
                }
            });


            // In chuỗi HTML ra searchResults
            $('#ketquatimkiem2').html(htmlResult);
            $('#ketquatimkiem3').html(htmlResult2);
            $('#ketquatimkiem4').html(htmlResult3);

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