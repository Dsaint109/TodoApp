(function($) {	

	var sometime = new Date();
	console.log(sometime);

	function hideAction(state) {
		$(state).parent('.action').addClass('hide');
	}

	$(function(){
		$('.modal').modal();

		$('select').material_select();

		 $(".sidenav-a").sideNav({
		 	menuWidth: 315,
		 	edge: 'right',
		 	draggable: true,
		 	closeOnClick: true
		 });

		 $('.action-close').click(function(){
		 	$(this).parent().parent().addClass('hide');
		 });

		 $('.action-close').click(function(){
		 	$(this).parent().parent().addClass('hide');
		 });

		 $('.task-done').click(function(){
		 	$(this).siblings('span').css('text-decoration', 'line-through');
		 });

		 $('.task-list i').on('click', function(){
		 	$(this).siblings('.action').toggleClass('hide');
		 });
	});

})(jQuery);