const myArray = [42, [1, 2, 3], 'hello'];

if (Array.isArray(myArray[1])) {
  console.log("Index 1 is an array!");
  console.log(myArray[1]);
} else {
  console.log("Index 1 is not an array.");
}
