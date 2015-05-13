$(function () {
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});

	$(window).scroll(function() {

		var tScroll = $(this).scrollTop();

		$('#main-logo > img').css({
			'transform': 'translate(0px,' + tScroll/15 + '%)'
		});

		$('#flowers-top').css({
			'transform': 'translate(0px, -' + tScroll/40 + '%)'
		});

		$('.petals').css({
			'transform': 'translate(0px, -' + tScroll/25 + '%)'
		});

		$('.petals-blur').css({
			'transform': 'translate(0px, ' + tScroll/30 + '%)'
		});

	});



})