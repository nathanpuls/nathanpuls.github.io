// Get the user ID from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const uidValue = urlParams.get('uid');


// Get the DOM element to display the value
const uidElement = document.getElementById('uid');

// Set the value to the innerHTML of the DOM element
uidElement.innerHTML = uidValue;






// Construct the API endpoint URL
//const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio/${uid}`;
//const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"1643919725090x169839524417895170"}]`;
const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"${uidValue}"}]`;

//https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"1643919725090x169839524417895170"}]
//https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"${uid}"}]




/*TEST

   // Get the DOM element to display the value
   const testElement = document.getElementById('test');

   // Set the value to the innerHTML of the DOM element
   testElement.innerHTML = 'JavaScript is working!';

   // Alert the value
   alert(testElement.innerHTML);

   */

