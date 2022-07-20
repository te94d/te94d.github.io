

$(function () {
  $('.learn-more').prevAll().hide();
  $('.learn-more').click(function () {
      if ($(".more-item").is(':hidden')) {
          $(".more-item").slideDown();
          $(".button-text").text('close').addClass('close');
      } else {
          $(".more-item").slideUp();
          $(".button-text").text('Learn More').removeClass('close');
      }
  });
});