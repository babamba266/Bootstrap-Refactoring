document.addEventListener('DOMContentLoaded', function(){
  toolTip();
  popOver();
  popOvertrigger();
});
// bootstrap_toolTip
function toolTip(){
  $('[data-toggle="tooltip"]').tooltip();
}
// bootstrap_popOver
function popOver(){
  $('[data-toggle="popover"]').popover();   
}
// bootstrap_popOver
//popOver토글요소가 아닌 다른 요소 클릭할때 팝오버를 해제하는것
function popOvertrigger(){
  $('.popover_dismiss').popover({
    trigger: 'focus'
  })  
}

