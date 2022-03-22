// var element = document.getElementById('right-menu');
// element.style.removeProperty("display")
// 숨기기 버튼은 처음에는 안보이게
$('#hide-bnt').hide();
// var right2 = document.getElementById('right-menu')
// right2.style.display = "";
// $('#hide-bnt').hide();
// $('#show-bnt').hide();
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

// 버튼 누른후에도 크기에 따라 없어지고 나타나게 하기
function resizeApply() {
    var body = document.getElementsByName('body')[0];
    var right = document.getElementById('right-menu').style.display;
    var right2 = document.getElementById('right-menu')
    if (window.innerWidth > 660) {
        $('#hide-bnt').hide();
        $('#show-bnt').hide();
        // $('#right-menu').show();
        right2.style.display = "";
        if (right === "block"){
            right2.style.display = "";
        }


    }
    if (window.innerWidth < 660) {
        $('#show-bnt').show();
        $('#right-menu').hide();
        if (right === "block") {
            right2.style.display = "block";
            $('#show-bnt').hide()
        }
    }
}

// $('#hide-bnt').hide()
//     if (right === "block") and (window.innerWidth < 660)
//         console.log(right)
//         $('#right-menu').show()
//         $('#show-bnt').hide()
// }

window.onload = function (){
    window.addEventListener('resize', function (){
        resizeApply()
    });
}

resizeApply()


// 페이지 업
$(function(){
	$('#back-to-top').on('click',function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop:0},600);
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('#back-to-top').addClass('show');
    } else {
      $('#back-to-top').removeClass('show');
    }
  });
});