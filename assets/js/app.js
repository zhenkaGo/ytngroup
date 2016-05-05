$(document).ready(function () {
  var myMap,
    myPlacemark;
  ymaps.ready(init);


  $('.menu-js').on("click", scrollTo);
  $('#d-main-slider').carousel({
    interval: 4000
  });

  $('#portfolio-collapse').on('show.bs.collapse', function () {
    $('#portfolio-show-more-btn').text('Скрыть')
  }).on('hide.bs.collapse', function () {
    $('#portfolio-show-more-btn').text('Больше проектов');
  });


  $('.d-tab-content').on('click','.show-more-btn', function () {
    var tabPane = $(this).closest('.tab-pane'),
      newHeight = tabPane.find('.tab-content-text').eq(0).height();
    tabPane.find('.tab-content-header').eq(0).css('height', newHeight + 100 + 'px');
    $(this).addClass('hidden');
  });

  $('.d-tabs li a').on('shown.bs.tab', function (e) {
    var relatedTarget = $(e.relatedTarget).attr('href');
    $(relatedTarget).find('.tab-content-header').css('height', '300px');
    $(relatedTarget).find('.show-more-btn').removeClass('hidden');
  });


  function init() {
    myMap = new ymaps.Map('d-map', {
      center: [50.465724, 30.512285],
      zoom: 16,
      controls: []
    });
    myMap.behaviors.disable('scrollZoom');
    myPlacemark = new ymaps.Placemark([50.465724, 30.512285], {});
    myMap.geoObjects.add(myPlacemark);
  }

  function scrollTo(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 50;
    $('body,html').animate({scrollTop: top}, 500);
  }

  $('.d-indicators').viewportChecker({
    callbackFunction: function () {
      var duration = 1000;
      for (var i = 1; i <= $('.countIndicator').length; i++) {
        var count = $('#count' + i);
        count.animateNumber({number: count.data('number')}, duration);
      }
    }
  });

  $('#d-team-carousel').owlCarousel({
    items: $('.member').length,
    itemsDesktop: [1920, 4],
    paginationSpeed: 500,
    pagination: true
  });

  $('#d-feedback-flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    slideshow: false,
    animationLoop: true,
    customDirectionNav: $(".f-flex-nav-btn")
  });


  $('#callHeaderFooterForm').on('submit', function (e) {
    e.preventDefault();
    var numberInput = $(this).find('input[name="number"]').eq(0).val(),
      numberFormReq = (numberInput && numberInput.length > 5 && $.isNumeric(numberInput));
    if (numberFormReq) {
      postForm('callHeaderFooterForm', 'call-footer-header-modal');
    } else {
      swal("Ошибка!", "Неправильно заполненное поле: 'Номер телефона'", "error");
    }
  });


  $('#orderForm').on('submit', function (e) {
    e.preventDefault();
    var numberInput = $(this).find('input[name="number"]').eq(0).val(),
      numberFormReq = (numberInput && numberInput.length > 5 && $.isNumeric(numberInput));
    if (numberFormReq) {
      postForm('orderForm', 'order-modal');
    } else {
      swal("Ошибка!", "Неправильно заполненное поле: 'Номер телефона'", "error");
    }
  });

  $('#callForm').on('submit', function (e) {
    e.preventDefault();
    var numberInput = $(this).find('input[name="number"]').eq(0).val(),
      numberFormReq = (numberInput && numberInput.length > 5 && $.isNumeric(numberInput));
    if (numberFormReq) {
      postForm('callForm', 'call-modal');
    } else {
      swal("Ошибка!", "Неправильно заполненное поле: 'Номер телефона'", "error");
    }
  });

  $('#stockForm').on('submit', function (e) {
    e.preventDefault();
    var numberInput = $(this).find('input[name="number"]').eq(0).val(),
      numberFormReq = (numberInput && numberInput.length > 5 && $.isNumeric(numberInput));
    if (numberFormReq) {
      postForm('stockForm', 'stock-modal');
    } else {
      swal("Ошибка!", "Неправильно заполненное поле: 'Номер телефона'", "error");
    }
  });

  $('#iDecideForm').on('submit', function (e) {
    e.preventDefault();
    postForm('iDecideForm');
  });

  function postForm(form, modal) {
    $.post(form + '.php', $('#' + form).serialize()).done(function () {
      swal({
          title: "Спасибо!",
          text: "Ваша заявка Отправлена! В ближайшее время мы с Вами свяжемся!",
          type: "success"
        },
        function (isConfirm) {
          if (isConfirm) {
            for (var i = 0; i < $('#' + form).find('input').length; i++) {
              $('#' + form).find('input').eq(i).val('');
            }
            if (modal) $('#' + modal).modal('hide');
          }
        });
    });
  }
});
