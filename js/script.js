var $showCard = $('.show-card');
var $card = $('.card');
var showClass = 'show';
var hideClass = 'hide';
var closeClass = 'close';

$showCard.click(function(e) {
  $card.addClass(showClass).css('display', 'block');
  $showCard.addClass(hideClass);
});

// $('.card .close').click(function(e) {
$card.click(function(e) {
	if ($(e.currentTarget.children[0]).hasClass(closeClass)) {
		$card.addClass(hideClass);
  			setTimeout(function() {
    		$card.css('display', 'none').removeClass(showClass).removeClass(hideClass);
  		}, 1000);
	  	$showCard.removeClass(hideClass);
	}
});