$(document).ready(function () {
  $(".dws-progress-bar").circularProgress({
      color: "#2af7eb",
      line_width: 17,
      height: "350px",
      width: "350px",
      percent: 0,
      counter_clockwise: false,
      starting_position: 25
  }).circularProgress('animate', 100, 1700);
});  

$(window).on('load', function () {
  var $preloader = $('#preloader');
  $preloader.delay(1800).fadeOut('slow');
});    

