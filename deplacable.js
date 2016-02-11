(function($) {
	
	$.fn.depla = function()
	{
		var $dragging = false; 

		this.each(function() {
			$(this).css("background-color","#33CCFF");
			$(this).css("color","white");
			
					$(this).mousemove(function(e){
						
						if($dragging)
						{
							var $wid = $(this).width() / 2;
							var $hei = $(this).height() / 2;

							$(this).offset({
								top:e.pageY - $hei,
								left:e.pageX - $wid,
							});



						}


					});
					$(this).mousedown(function(){
							$(this).css("cursor","move");
							$(this).css("background-color","white");
							$(this).css("color","#33CCFF");
							$dragging = true;

					});
				$(this).mouseup(function(){
					$(this).css("cursor","default");
					$(this).css("background-color","#33CCFF");
					$(this).css("color","white");
					$dragging = false;
				});

		});
		
	};
})(jQuery);
