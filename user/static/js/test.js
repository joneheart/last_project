// var element = document.getElementById('right-menu');
// element.style.removeProperty("display")
// 숨기기 버튼은 처음에는 안보이게
$('#hide-bnt').hide();

// 크기가 줄었을때 버튼 클릭시 메뉴 보여주기
$(function () {
    $('#show-bnt').click(function () {
        if ($("#right-menu").css('display') == "none") {
            // console.log($("#right-menu").css('display'))
            $('#right-menu').show();
            $('#hide-bnt').show();
            $('#show-bnt').hide();
        }
    });
});
// 메뉴 보여준 후 다시 숨기기
$(function () {
    $('#hide-bnt').click(function () {
        if ($("#right-menu").css('display') == "block") {
            console.log($("#right-menu").css('display'))
            $('#right-menu').hide();
            $('#hide-bnt').hide();
            $('#show-bnt').show();

        }
        // html에 생기는 style 삭제 기늘
        var element = document.getElementById('right-menu');
        element.style.removeProperty("display")
        var el = document.getElementById('show-bnt');
        el.style.removeProperty("display")
    });
});

