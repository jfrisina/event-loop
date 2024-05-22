// Declare a global counter variable.
var counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
const incrementer = () => {
  counter++;
  return incrementer();
};

// Surround the initial function call in a try/catch block.
try {
  incrementer();
} catch (err) {
  // Within the catch, log the error and the value of the counter variable.
  console.error(err);
  console.log(counter);
}