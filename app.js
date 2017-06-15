// your code here
// event listener on click of .js-light-bulb 
// add class .bulb-on to element clicked
// remove class from all other elements
console.log('hello josh');
$(function(){
	$('.js-lightbulb').click(function(event) {
		$('*').find('.bulb-on').removeClass('bulb-on');
		$(event.target).addClass('bulb-on');

	})
})