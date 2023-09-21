

function selectionSort(arr) {
  const originalArray = arr.slice(); // Copy the original array
  const sorted = []; // Create an array to store the sorted values

  while (originalArray.length > 0) { // While the array is not empty...
    console.log(sorted.join(",")); // Print the current state of the sorted array

    let minIndex = 0; // Find the index of the minimum value in the unsorted half

    for (let i = 1; i < originalArray.length; i++) {
      if (originalArray[i] < originalArray[minIndex]) {
        minIndex = i;
      }
    }

    const minValue = originalArray.splice(minIndex, 1)[0]; // Save and remove the value at the min index
    sorted.push(minValue); // Add the min value to the end of the sorted array
  }

  return sorted;
}


function selectionSortInPlace(arr) {
  let divider = 0; // Set a pointer at zero dividing the array into sorted and unsorted halves

  while (divider < arr.length) { // Repeat while the unsorted half is not empty...
    console.log(arr.join(",")); // Print the current state of the array

    let minIndex = divider; // Find the index of the minimum value in the unsorted half

    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    const minValue = arr[minIndex]; // Save the min value

    // Shift unsorted values to the right by 1
    for (let i = minIndex; i > divider; i--) {
      arr[i] = arr[i - 1];
    }

    arr[divider] = minValue; // Put the min value at the divider
    divider++; // Increment the divider and repeat
  }
}


module.exports = [selectionSort, selectionSortInPlace];
