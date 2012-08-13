$(function() {
   
   var tooltipClass = 'tooltip';//The class that triggers the tooltip
   var tooltipStyle = true;//Whether or not the tooltip should be styled
   
   $('.' + tooltipClass).hover(function() {
      
        var pos = $(this).offset();
        $('body').prepend('<div class="x-tooltip-overlay">' + $(this).attr('data-tooltip') + '</div>');
        if(tooltipStyle)
        {
                
            $('.x-tooltip-overlay').css('background-color','black').css('color','white').css('padding','5px').css('font-family','inherit');

        }
        $('.x-tooltip-overlay').css('position','absolute').css('top',(pos.top - $(this).height())).css('left',(pos.left + $(this).width()));
       
   },function() { $('.x-tooltip-overlay').remove(); });
    
});