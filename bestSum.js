//Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers
// as arguments.
// in this function our mission is to return an array containing the shortest combination
// of numbers that add up to exactly the targetSum.

const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo)return memo[targetSum];
    //if the targetSum is zero then i m returning an empty array
  if(targetSum === 0) return [];
  // if the targetSum is less than zero then i m going to return nulll. 
  // Means impossible to generate the targetSum
  if(targetSum < 0) return null;
  // im going to iterate to all possible numbers

  // so i m creating a variable like, which I will updated
  // equal to null
  let shortestCombination = null;


  for (let num of numbers) {
      // then i m creating a remainder which in this case will be the targetSum minus the chosen number
      const remainder = targetSum - num;
      // at this point doing the recursive I need to see if the remainderCombination will 
      //return me a target sum or null
      const remainderCombination = bestSum(remainder, numbers,memo);
      // if this remainderCombination is not null then
      // point out the remainderCombination is an array point out the shortest way i m looking for
      if(remainderCombination !== null){
          const combination = [...remainderCombination, num]
          // if the combination is shorter than the current shortest then
          // because we can have null.length in javascript
          // we are including a hypothesis, if the shortestCombination is null then replace it
          if(shortestCombination === null || combination.length < shortestCombination.length){
              shortestCombination = combination;
          }
      }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
// so at this point i need to calculate all the recursive actions to my tree
// to find out the shortest combination 

// m = target sum
// n = numbers, length
 
// Brute Force Methodology
// time: O(n^m) complexity
//space: O(m^2) complexity

//Memoized Time & Space Complexity
// time: O(m^2n)
//space: O(m^2)

console.log(bestSum(7,[5,3,4,7]));// 7
console.log(bestSum(8,[2,3,5]));// [5,3]
console.log(bestSum(8,[1,4,5]));//[4,4]
console.log(bestSum(100,[1,2,5,25]));//[25,25,25,25]

