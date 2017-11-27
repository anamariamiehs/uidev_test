(function($){
        $(window).on("load",function(){
        	var $modal = $(".modal");
            $(".scrollbar").mCustomScrollbar();
            $(".thumbnail .button").click(function(){
            	$modal.show();
            });
            $(".close").click(function(){
            	$modal.hide();
            });
        });
    })(jQuery);