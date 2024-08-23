function findFirstDuplicate(arr) {
  // type your code here
  const num_read = {};
  for (num of arr) {
    if (num_read[num]) 
      return num;
    else
      num_read[num] = true;
  }

  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log('Expecting: -1');
  console.log('=>', findFirstDuplicate([]));

  console.log("");

  console.log('Expecting: 1');
  console.log('=>', findFirstDuplicate([1, 2, 1, 2]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
