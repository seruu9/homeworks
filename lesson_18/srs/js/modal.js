
$(document).ready(function(){
  var buttem = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  buttem.on('click', function() {
    modal.addClass('modal_active');
  });
  
  close.on('click', function(){
    modal.removeClass('modal_active')
  });
});