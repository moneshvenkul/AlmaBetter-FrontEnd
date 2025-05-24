// Debounce function: delays calling 'fn' until 'delay' ms after the last call
function debounce(fn, delay) {
  let timer;                   // Variable to store the timeout ID
  return (...args) => {        // Return a new function that takes any arguments
    clearTimeout(timer);       // Clear any existing timer so fn doesn't run yet
    timer = setTimeout(() => { // Set a new timer
      fn(...args);             // After 'delay' ms, call the original function with arguments
    }, delay);
  };
}

// Example usage with an input box:
// Assume there's an <input id="searchBox"> in your HTML
document.getElementById('searchBox').addEventListener(
  'input',                                // Listen for input events (typing)
  debounce((e) => {                       // Use our debounce function
    console.log(e.target.value);          // Log the input value, but only after 500ms of no typing
  }, 500)                                 // 500ms debounce delay
);
