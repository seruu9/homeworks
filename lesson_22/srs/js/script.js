// оброботка и отправка формы ччерез Ajax
$('#offer-form').on('submit', function(event){
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.success').text(data + ', Ваша форма отправлена.')
    }
  });
});
// слайдер 
$(document).ready(function(){


// маска телефона
$(".phone").mask("+8 (999) 999 - 99 - 99");
// валидацыя формы
  $('#brif-form').validate({
    rules:{
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phones: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Укажыте имя",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
        maxlength: jQuery.validator.format("Привышен количество символов: {0}")
      },
    phone: {
      required: "Укажыте телефон"
      // minlength: jQuery.validator.format("Осталось символов: {0}"),
      // maxlength: jQuery.validator.format("Привышен количество символов: {0}")
    },

    email: {
      required: "Укажыте Email",
      email: "неверный Email"
      }
    }
  });
// слайдер   
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
// инецализацыя WOW.js
// new WOW().init();
