// Throttle function: ensures 'fn' runs at most once every 'delay' ms
function throttle(fn, delay) {
  let last = 0; // Stores the timestamp of the last call
  return (...args) => { // Return a new function that takes any arguments
    let now = Date.now(); // Get the current time
    if (now - last > delay) { // If enough time has passed since last call
      last = now;            // Update 'last' to current time
      fn(...args);           // Call the original function with arguments
    }
  };
}

// Example usage:
// This function will log the scroll position, but only once every 500ms
window.addEventListener(
  'scroll',                       // Event type
  throttle(() => {                // Use our throttle function
    console.log(window.scrollY);  // Log the current vertical scroll position
  }, 500)                         // 500ms throttle delay
);
