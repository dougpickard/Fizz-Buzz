/***Fizz Buzz by Doug***/

$(document).ready(function() {
	// console.log('doc ready')
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var number = +$('#query').val();
 

		if (!$('section').is(':empty')) $('section').html('');

		if (!$('span').is(':empty')) $('span').html('');

		if (number % 1 === 0) {

		if (number > 0) {

			if (number < 101) {
		  	appendFizzBuzz(number);
		  	} else {
		  	$('span').append('Input cannot be a number greater than 100!');
		  	}

		    
		} else {
		    $('span').append('Input cannot be a negative value!');
		}  

		} else {
		  $('span').append('Input must be an integer.');
		}

	});

});

var appendFizzBuzz = function (n) {
	for (var i = 1; i <= n; i++) {

		// Check if 'i' is divisible by both 3 and 5
		if (i % 15 === 0) {
			$('section').append('FizzBuzz');

		// Check if 'i' is divisible by 3
		} else if (i % 3 === 0) {
			$('section').append('Fizz');

		// Check if 'i' is divisible by 5
		} else if (i % 5 === 0) {
			$('section').append('Buzz');

		// If none of the above, print 'i'
		} else {
			$('section').append(i);
		}

		// Add a line break after each iteration of the for loop
		$('section').append('<br />');
	}
};

