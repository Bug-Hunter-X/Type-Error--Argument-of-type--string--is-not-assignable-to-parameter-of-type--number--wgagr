function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input: Both arguments must be numbers.");
    return 0; // Or throw an error
  }
}

const result1 = addSafe(5, 10); // Correct usage: result1 is 15
const result2 = addSafe("hello", 5); // Safe usage: Prints error message, result2 is 0
const result3 = addSafe(5, "world"); // Safe usage: Prints error message, result3 is 0