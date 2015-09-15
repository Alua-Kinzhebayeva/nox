$(document).ready(function (){
  var overlay = document.createElement("div");
  overlay.id = 'overlay';
  var selectedEl = {};
  $(document).delegate( "#overlay", "click", function() {
    $('#overlay').fadeOut(300, function(){
      $(selectedEl).css('position','');
      $(selectedEl).css('z-index','');
      $(selectedEl).css('background','');
      selectedEl.parentNode.removeChild(overlay);
    });
  });

  $(document.body).keydown(function (e){
    if(e.which == 13 && window.getSelection().toString().length > 0){
      var el =  window.getSelection().focusNode.parentElement;
      if(selectedEl.tagName != 'HTML'){
        selectedEl = el;
        $(selectedEl).css('position','relative');
        $(selectedEl).css('z-index','99999');
        $(selectedEl).css('background','#fff');
        window.getSelection().empty();
        selectedEl.parentNode.appendChild(overlay);
        $('#overlay').fadeIn(300);
      }else{
        var area = e.target;
        selectedEl = e.target;
        $(selectedEl).css('position','relative');
        $(area).css('z-index','99999');
        $(area).css('background','#fff');
        window.getSelection().empty();
        selectedEl.parentNode.appendChild(overlay);
        $('#overlay').fadeIn(300);
      }
    }});
  });
