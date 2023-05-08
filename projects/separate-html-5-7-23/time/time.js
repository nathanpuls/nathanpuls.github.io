// Get the div element
const datetime = document.getElementById("datetime");

// Function to update the date and time every second
function updateDateTime() {
  // Get the current date and time
  const now = new Date();

  // Format the date and time as a string
  const dateTimeString = now.toLocaleString();

  // Set the text content of the div to the date and time string
  datetime.innerHTML = dateTimeString;
}

// Call the updateDateTime function once to set the initial value of the div
updateDateTime();

// Call the updateDateTime function every second to update the div
setInterval(updateDateTime, 1000);
