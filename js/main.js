// Set the date we're counting down to
	var countDownDate = new Date("June 25, 2020 09:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  // Get today's date and time
	  var now = new Date().getTime();

	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var secs = Math.floor((distance % (1000 * 60)) / 1000);

	  // Output the result in an element with id="demo"
	  document.getElementById("days").innerHTML = days; 
	  document.getElementById("hours").innerHTML = hours; 
	  document.getElementById("mins").innerHTML = mins;
	  document.getElementById("secs").innerHTML = secs;
		
	
	   document.getElementById("link-to-inaugration-live").style.display = 'none';

	  // If the count down is over, write some text 
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("cd").style.display='none';
		
		document.getElementById("link-to-inaugration-live").style.display='block';
	  }
	}, 1000);

