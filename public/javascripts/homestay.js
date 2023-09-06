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