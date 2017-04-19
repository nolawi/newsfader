/*! News Fader - v0.1.2 - 2017-04-19
* https://github.com/nolawi/newsfader
* Copyright (c) 2017 Nolawi Petros; Licensed MIT */
(function($) {
  $.fn.newsfader = function(opts) {
    // default configuration
    var config = $.extend({}, { 
            fadeInTime: 800,
            fadeOutTime: 800,
            interval: 5600
        }, opts);
    // main function
    function init(obj) {
        
            var dNewsticker = obj;
            var dFrame = dNewsticker.find('ul');
            var dItem = dFrame.find('l1');
            var dCurrent;
            var stop = false;

            dItem.eq(0).addClass('current');
            dItem.eq(0).show();
            
            var move = setInterval(function(){
                if(!stop){
                    dCurrent = dFrame.find('.current');
                    dCurrent.fadeOut(config.fadeOutTime, function(){
                        if(dCurrent.next().length !== 0){
                            dCurrent.removeClass('current');
                            dCurrent.next().addClass('current');
                            dCurrent.next().fadeIn(config.fadeInTime);
                        }
                        else{
                            dCurrent.removeClass('current');
                            dItem.eq(0).addClass('current');
                            dItem.eq(0).fadeIn(config.fadeInTime);
                        }
                    });
                }
            }, config.interval);
            
            dNewsticker.on('mouseover mouseout', function(e){
                if(e.type === 'mouseover'){
                    stop = true;
                }
                else{
                    stop = false;
                }
            });
        }
    // initialize every element
    this.each(function() {
      init($(this));
    });
    return this;
  };
  // start
  
})(jQuery);