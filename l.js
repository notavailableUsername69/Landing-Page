// script.js

// Get the button element
var ctaButton = document.querySelector('.cta-button');

// Add a click event listener to the button
ctaButton.addEventListener('click', function(event) {
  event.preventDefault();
 
  // Display an alert when the button is clicked
  alert('Button clicked!');
});