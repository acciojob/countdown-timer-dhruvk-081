// Your script here.
const userInput = document.getElementById('userInput');
const startButton = document.querySelector('button');
const countDownElement = document.getElementById('countDown');
const endTimeElement = document.getElementById('endTime');



// Function to start the countdown timer
function startCountdown() {
	// Get the duration from the user input
	const duration = userInput.value;
	// Convert duration to milliseconds
	const durationMs = duration * 60 * 1000;
	
	// Get the current time and calculate the end time
	let currentTime = new Date();
    currentTime.setTime(currentTime.getTime() + durationMs);
	let endTime = currentTime.getTime();

	let hour = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	minutes = minutes < 10 ? '0' + minutes : minutes;
    let content = (hour % 12 || 12) + ":" + minutes + (hour < 12 ? " AM" : " PM");
	
	// Display the end time
	endTimeElement.textContent = content;
	
	// Update the countdown every second
	let countdownInterval = setInterval(function () {
		// Get the current time
		let currentTime = new Date().getTime();
		
		// Calculate the remaining time
		let remainingTime = endTime - currentTime;
		
		// let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
		let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
		
		// If the remaining time is less than or equal to 0, stop the countdown
		if (remainingTime <= 0) {
			clearInterval(countdownInterval);
			countDownElement.textContent = 'Countdown Complete';
			return;
			}
		
		// Display the remaining time
		countDownElement.textContent = 'Remaining Time: ' + hours + "h " + minutes + "m " + seconds + "s ";
		}, 1000);
	}

// Function to format time as HH:MM PM/AM
function formatTime(time) {
  const date = new Date(time);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  minutes = minutes < 10 ? '0' + minutes : minutes;

  return hours + ':' + minutes + ' ' + period;
}

// Event listener for the start button
startButton.addEventListener('click', startCountdown);

// Event listener for the Enter key in the user input field
userInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    startCountdown();
  }
});
