// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and 
//an array of numbers as arguments.
// However, this function should return an array containing any combination
// of elements that add up to exactly the targetSum. If there is no combination that
// adds up to the targetSum, then return null.

// if there are multiple combinations possible, you may return any single one.

//Methodology Approach
// This exercise is almost the same but here I want to return a combination of numbers 
// that leads to the targetSum.

const howSum = (targetSum, numbers,memo={})=>{
    if(targetSum in memo)return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null){
            memo[targetSum]= [...remainderResult, num ];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};

// m= target sum
// n = numbers.length
// Brute Force Approach
// time: 0(n ^ m)
// space: 0(m)


console.log(howSum(7,[2,3]));// [3,2,2]
console.log(howSum(7,[5,3,4,7]));//[4,3]
console.log(howSum(7,[2,4]));//null
console.log(howSum(300,[7,14]));//null
console.log(howSum(8,[2,3,5]));//[2,2,2,2]
