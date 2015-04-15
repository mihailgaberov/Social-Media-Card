var $showCard = $('.show-card');
var $card = $('.card');
var showClass = 'show';
var hideClass = 'hide';
var closeClass = 'close';

$showCard.click(function(e) {
  $card.addClass(showClass).css('display', 'block');
  $showCard.addClass(hideClass);
});

$card.click(function(e) {
	var parent = e.target.parentElement;
	if ($(parent).hasClass(closeClass) || 
		$(parent.parentElement).hasClass(closeClass)) {
		$card.addClass(hideClass);
  			setTimeout(function() {
    		$card.css('display', 'none').removeClass(showClass).removeClass(hideClass);
  		}, 1000);
	  	$showCard.removeClass(hideClass);
	}
});