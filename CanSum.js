//Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of 
// numbers as arguments.
//This function should return a boolean indicating whether or not is is possible
// to generate the targetSum using numbers from the array.

// Constrains: 
//1. You may use an element of the as many times you want
//2. You may assume that all input numbers are non negative numbers.

// Methodology Approach

const canSum = (targetSum, numbers, memo={}) => {
    // i m asking my self if the targetSum is in the memo store
    if(targetSum in memo) return memo[targetSum];
    // the function will be zero when I reach the zero by talking no numbers from the array
if (targetSum === 0) return true;
// adding this case scenario because in our tree we found out that there are nods we cant move any more
// so we are if the targetSum is less than 0 return me false
if(targetSum < 0) return false;

//i m iterating through these numbers according to my recursive scenario
// so i m iterating through every elements of the array
for(let num of numbers){
    // console.log(num);
    //Having in our mind the logic from the tree earlier, we need to subtracking the current choice of number
    // from the target number sum. This will give as the new basic target.
    // we are using a remainder that it will take our function and the number of the array 
    const remainder = targetSum - num;
    // it is well known from the constrains at the top that we can use as many times we want 
    // the numbers array.

    // it actually saying in line 28 , if it is possible to generate the remainder
    // by using the numbers of the array then we can return true for the largest problem in line 12
    if (canSum(remainder, numbers, memo) === true){
        memo[targetSum]= true;
        return true;
    }
}
// i m returning false here because I attempt earlier to calculate all the possibilities
// and then I found out that it is impossible to generate the targetSum.
memo[targetSum] = false;
return false;
};

console.log(canSum(7,[2,3]));//true
console.log(canSum(7,[5,3,4,7])); //true
console.log(canSum(7,[2,4]));//false
console.log(canSum(8,[2,3,5]));//true
console.log(canSum(300,[7, 14]));//false