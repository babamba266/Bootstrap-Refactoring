$(document).ready(function() {
  aside_close();
  langDropdownClose();
  myinfoDropdownClose();
  pwdOnOff();
});

// 사이드바 메뉴 열기
function asidebar(){
  $('.aside').animate({'position':'fixed', 'left':'0px'});
  $('.layout_overlay').css({'display':'block'});
}

// 사이드바 메뉴 닫기
function aside_close(){
  $('.layout_overlay').click(function(){
    $('.aside').animate({'position':'fixed', 'left':'-1200px'});
    $('.layout_overlay').css({'display':'none'});
  });
}

// 헤더 네브바에 언어 클릭 시 드롭다운해서 메뉴보이기
function langDropdown(){
  $('.lang_dropdown').find('.lang_dropdown_menu').slideToggle('fast');
}

// 언어 드롭다운 보이는 상태에서 메뉴안이 아닌 바깥쪽을 클릭하면 닫기 또는
// 언어를 다시클릭 해도 닫기
function langDropdownClose(){
  $(document).on('click', function(event){
    var $trigger = $('.lang_dropdown');
    if($trigger !== event.target && !$trigger.has(event.target).length){
      $('.lang_dropdown_menu').slideUp('fast');
    }
  });
}

// 헤더 네브바에 내아이디 클릭 시 드롭다운해서 메뉴보이기
function myinfoDropdown(){
  $('.my_dropdown').find('.my_dropdown_menu').slideToggle('fast');
}

// 나의정보 드롭다운 보이는 상태에서 메뉴안이 아닌 바깥쪽을 클릭하면 닫기 또는
// 내아이디를 다시클릭 해도 닫기
function myinfoDropdownClose(){
  $(document).on('click', function(event){
    var $trigger = $('.my_dropdown');
    if($trigger !== event.target && !$trigger.has(event.target).length){
      $('.my_dropdown_menu').slideUp('fast');
    }
  });
}


// 페이지차단 로딩중화면
function lodingWrap01(){
  // 버튼 클릭 시 로딩중일때 화면
  $("#loding_wrap").addClass("loding_wrap");
  $("#loding_spinner").removeClass("d_none");
  $("#loding_spinner").addClass("d_block");
  $("#loding_spinner").addClass("loding_spinner-position");
  
  $("body").addClass("body_loding_wrap");
  const myTimeout = setTimeout(lodingWrap02, 5000);
}

function lodingWrap02() {
  $("#loding_wrap").removeClass("loding_wrap");
  $("#loding_spinner").addClass("d_none");
  $("#loding_spinner").removeClass("loding_spinner-position");
  $("#loding_spinner").removeClass("d_block");

  $("body").removeClass("body_loding_wrap");
}

// input 비밀번호보기/숨기기
function pwdOnOff(){
  $('.pwd_icon').click(function(event){
    $(this).prev().toggleClass('active'); 
    if($(this).prev().hasClass('active')){
      $(this).children().attr('class',"bx bx-show")
      .parent('span').prev('input').attr('type',"text");
    }else{
      $(this).children().attr('class',"bx bx-hide")
      .parent('span').prev('input').attr('type','password');
    }
  });
}
