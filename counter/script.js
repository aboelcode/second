// Get DOM elements
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initialize counter
let count = 0;

// Update the counter display
function updateCounter() {
    counterElement.textContent = count;
    
    // Optional: Change color based on value
    if (count > 0) {
        counterElement.style.color = '#27ae60';
    } else if (count < 0) {
        counterElement.style.color = '#e74c3c';
    } else {
        counterElement.style.color = '#2c3e50';
    }
}

// Event listeners
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});