// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

  if(arr.length <= 1){
    return;
  }

  let mid = Math.floor(arr.length/2);
  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);

  return merge( mergeSort(leftArray),mergeSort(rightArray));

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  


  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

  let sorted = [];
  while(arrA.length && arrB.length){
     if(arrA[0] < arrB[0]){
      sorted.push(arrA.shift());
     }else{
      sorted.push(arrB.shift());
     }
  }

  return [...sorted, ...arrA, ...arrB];

}

module.exports = [merge, mergeSort];

