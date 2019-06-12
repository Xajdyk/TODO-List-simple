$(document).ready(function() {	
	
	var ul = $('ul'),
		input = $('input');

	input.focus();	

	$('form').submit(function () {
	    if (input.val() !== '') {
	        var inputVal = input.val();
	        ul.append('<li>' + inputVal + '<a href="">X</a></li>');
	        if (ul.hasClass('inactive')) {
	        	ul.removeClass('inactive')
	        		.addClass('active');
	        }
	    };
	    input.val('');
	    return false;
	});

	ul.on('click', 'a', function (e) {
	    e.preventDefault();
	    $(this).parent().remove();

	    if (ul.children().length == 0) {
	    	ul.removeClass('active')
	    		.addClass('inactive');
	    	input.focus();	
	    }
	});

});