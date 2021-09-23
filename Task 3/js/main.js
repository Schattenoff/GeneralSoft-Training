$(function(){

	$(window).scroll(function(){
		if($(window).scrollTop() > 1000) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
	
		$('a[href^="#"').on('click', function() {

	    let href = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, 900);
	    return false;
	});
});