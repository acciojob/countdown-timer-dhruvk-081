const input = document.getElementsByTagName('input')[0]
const button = document.getElementsByTagName('button')[0]
const endTimeTag = document.getElementById('endTime')
 
let endTime;
 
button.addEventListener('click', () => {
	let dateObj = new Date();
	const value = input.value
    dateObj.setTime(dateObj.getTime() + (value * 60 * 1000));
    endTime = dateObj.getTime()
 
	let hour = dateObj.getHours()
	let minute = dateObj.getMinutes()
    let content = (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
	
	endTimeTag.innerHTML = content;
	setInterval(updateTimer, 1000)
})
 
function updateTimer() {
 
  // Get today's date and time
 const now = new Date().getTime();
  
  // Find the distance between now and the count down date
  const distance = endTime - now;
    
  // Time calculations for days, hours, minutes and seconds
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countDown"
  document.getElementById("countDown").innerHTML = minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(updateTimer);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}