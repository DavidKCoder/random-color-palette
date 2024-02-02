const allElements = document.querySelectorAll('[class^="color-"]');
const shuffleIcon = document.getElementById('shuffle');

// Function to generate a random hexadecimal color
function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Function to set a random color for a given element
function setRandomColor(element) {
  const randomColor = generateRandomColor();
  element.style.backgroundColor = randomColor;
  element.querySelector('span').textContent = randomColor;
}

// Function to set random colors for all elements
function setRandomColors() {
  allElements.forEach(element => setRandomColor(element));
}

// Event listener for clicking on elements
allElements.forEach(element => {
  element.addEventListener('click', () => setRandomColor(element));
});

// Event listener for clicking on shuffle icon
shuffleIcon.addEventListener('click', setRandomColors);

// Initialize colors on page load
setRandomColors();
