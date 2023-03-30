$(document).ready(function () {

  // ui_slide에서 첫번째
  // 슬라이드 3개만보이기/ 자동플레이/ 1개씩 넘기기
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // ui_slide에서 두번째
  // 슬라이드 3개만보이기/ 자동플레이/ 1개씩 넘기기 /화살표없음
  $('.arrownone').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: 0,
  });

  // ui_slide에서 세번째
  // 슬라이드 1개만 보이기 / 1개씩 넘기기
  $('.single-item').slick();

  // ui_slide에서 네번째
  // 슬라이드 3개만보이기에서 1개만 돋보이게 다른건 반투명/ 1개씩 넘기기 /화살표없음
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
  
