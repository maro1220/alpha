var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.hidenav').hide();
  $('.navs li').hover(function () {
    $(this).children('ul').show();
  }, function () {

    $(this).children('ul').hide();
  })

  $('.product_box').hover(function () {
    $(this).children($('.up')).css({
      top: 0
    })
  }, function () {
    $(this).children($('.up')).css({
      top: 317
    })
  })

  $('.topbox').on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 400)
  })