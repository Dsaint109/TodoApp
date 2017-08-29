(function($) {	

	var sometime = new Date();
	console.log(sometime);

	function hideAction(state) {
		$(state).parent('.action').addClass('hide');
	}
	function mobileStuff() {
	 	var width = window.innerWidth || document.body.clientWidth;

		 if (width <= 600) {
		 	$('.task-list').click(function(){
		 		$('body').animate({scrollTop: 0}, 'fast', function(){
		 			$('.tll2').toggleClass('hide');
		 		});
		 	});
		 	$('.mkl2').click(function(){
		 		$('body').animate({scrollTop: 0}, 'fast', function(){
		 			$('.tll2').toggleClass('hide');
		 		});
		 	});
		 }
	}

	$(function(){
		mobileStuff();

		$('.modal').modal();

		 $(".sidenav-a").sideNav({
		 	menuWidth: 315,
		 	edge: 'right',
		 	draggable: true,
		 	closeOnClick: true
		 });

		 $('.action-close').click(function(){
		 	$(this).parent().parent().addClass('hide');
		 });

		 $('.action-edit').click(function(){
		 	$(this).parent().parent().addClass('hide');
		 });

		 $('.task-list i').on('click', function(){
		 	$(this).siblings('.action').toggleClass('hide');
		 });
		 $(window).scroll(function(){
			 $('.task-list i').on('click', function(){
			 	$(this).siblings('.action').toggleClass('hide');
			 });
		 });
		 $(window).resize(function(){
		 	mobileStuff();
		 });
	});

})(jQuery);