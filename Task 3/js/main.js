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

	const menuBtn  = document.querySelector('.menu-btn');
	let menuOpen = false;
	menuBtn.addEventListener('click', () => {
		if(!menuOpen) {
			menuBtn.classList.add('open');
			menuOpen = true;
			$('ul.menu').show();
		}
		else {
			menuBtn.classList.remove('open');
			menuOpen = false;
			$('ul.menu').hide();
		}
	});
	if ($(window).width() <= 992) {
		$('a[href^="#"').on('click', function() { 
			menuBtn.classList.remove('open');
			menuOpen = false;
			$('ul.menu').hide();
		});
	}
});