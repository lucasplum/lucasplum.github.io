$(document).ready(function(){
 
	$('*[data-animate]').addClass('hide').each(function(){
      $(this).viewportChecker({
        classToAdd: 'show animated ' + $(this).data('animate'),
        classToRemove: 'hide',
        offset: '30%'
      });
    });

	$('[href^="."]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
		if( target.length) {
			if(target.selector != '.footer-author'){
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
			}else{
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top + 50
				}, 1000);
			}
		}
	});

	// WEATHER WIDGET //
$('.header-weather').on('click', function(){
	$(this).toggleClass('clicked');
});

	$('.offer-content-ul li').hover(function(){
		$(this).toggleClass('active');
	});

// MAP //
$('.map').click(function () {
    $('#map').css("pointer-events", "auto");
});

$( ".map" ).mouseleave(function() {
  $('#map').css("pointer-events", "none"); 
});

// MENU //
var last_album;
$('[data-type]').on('click', function(event) {
	
		var target = $( $(this).attr('data-type') );

		last_album = target.selector;
		var put_last_album = 'Album: ' + last_album;
		$('.start p').html(put_last_album);

		target = ".type-" + target.selector;
		$(target).css("right", 0);

});
$('[data-back]').on('click', function(event) {
	
		var target = $( $(this).attr('data-back') );
		target = ".type-" + target.selector;
		$(target).css("right", "-100%");
});

$('.list li').mouseover(function(){
	$(this).find('.description').css("opacity", "1");
});
$('.list li').mouseleave(function(){
	$(this).find('.description').css("opacity", "0");
});

$('[data-menu-show]').on('click', function(event) {
	
		var target = $( $(this).attr('data-menu-show') );

		if(target.selector == 'list'){
			$('.gallery-left').find('*').addClass('list-show');
		}else if(target.selector == 'gallery'){
			$('.gallery-left').find('*').removeClass('list-show');
		}
});

$('[data-menu-prize]').on('click', function(event) {
	
		var target = $( $(this).attr('data-menu-prize') );

		if(target.selector == 'up'){
			$(".sorting li").css("display", "none");
			$(".sorting li").sort(sort_li).appendTo('.sorting').fadeIn(200);
			function sort_li(a, b){
				return ($(b).children().data('prize')) < ($(a).children().data('prize')) ? 1 : -1;    
			}
			//$(".sorting li").css("display", "none");
		}else if(target.selector == 'down'){
			$(".sorting li").css("display", "none");
			$(".sorting li").sort(sort_li).appendTo('.sorting').fadeIn(200);
			function sort_li(a, b){
				return ($(a).children().data('prize')) < ($(b).children().data('prize')) ? 1 : -1;    
			}
			//$(".sorting li").css("display", "none");
		}

		/*var delay_time = 0;
		$(".sorting li").each(function() {
			$(this).delay(delay_time).show("fast");
			delay_time += 50;
		});*/
});

// GALLERY //

$('#albums').not('ul').click(function(){
	$('.type-thumbs').css('right', '-100%');
});

});