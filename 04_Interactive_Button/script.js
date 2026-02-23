// Select the button
const button = document.getElementById("colorBtn");

// Add click event
button.addEventListener("click", function () {
  
  // Generate random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  // Change background color
  document.body.style.backgroundColor = randomColor;

});