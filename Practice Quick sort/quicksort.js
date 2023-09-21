function quicksort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    return arr; // Base case: already sorted or empty array
  }

  // Pick the first value as the pivot
  const pivot = arr[0];

  // Partition the array into left (smaller than pivot) and right (larger or equal to pivot)
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right subarrays
  const sortedLeft = quicksort(left);
  const sortedRight = quicksort(right);

  // Return the concatenation of sortedLeft, pivot, and sortedRight
  return [...sortedLeft, pivot, ...sortedRight];
}



module.exports = [quicksort];



let evenOdd = (arr)=>{
  let even = [];
  let odd = [];

  for(let i = 0; i < arr.length ; i++){
      if(arr[i]%2 === 0){
        even.push(arr[i])
      }else odd.push(arr[i])
  }

  return [...even,...odd];
}

























