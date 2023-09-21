function ageSort(users) {
  // Your code here
    // Custom comparison function based on age
    function compareByAge(user1, user2) {
      return user1.age - user2.age;
    }
  
    // Sort the array using the comparison function
    users.sort(compareByAge);
  
    // Return the sorted array of User objects
    return users
}

function oddEvenSort(arr) {
  // Your code here
  const odds = arr.filter(num => num % 2 !== 0);
  const evens = arr.filter(num => num % 2 === 0);

  odds.sort((a, b) => a - b);
  evens.sort((a, b) => a - b);

  return odds.concat(evens);
}

function validAnagrams(s, t) {
  // Your code here
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
}

function reverseBaseSort(arr) {
  // Your code here
  function getBase(num) {
    return Math.floor(Math.log(num) / Math.log(10)) + 1;
  }

  arr.sort((a, b) => {
    const baseA = getBase(a);
    const baseB = getBase(b);

    if (baseA !== baseB) {
      return baseB - baseA; // Sort by base in descending order
    } else {
      return a - b; // Sort within the same base in ascending order
    }
  });

  return arr;
}

function frequencySort(nums) {
  // Your code here
   // Create an object to store the frequency of each value
   const frequencyMap = {};
   for (const num of nums) {
     frequencyMap[num] = (frequencyMap[num] || 0) + 1;
   }
 
   // Custom sorting function
   function customSort(a, b) {
     if (frequencyMap[a] !== frequencyMap[b]) {
       return frequencyMap[a] - frequencyMap[b];
     } else {
       return b - a; // Sort in decreasing order when frequencies are the same
     }
   }
 
   // Sort the array using the custom sorting function
   nums.sort(customSort);
 
   return nums;

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];