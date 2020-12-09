// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and 
//an array of numbers as arguments.
// However, this function should return an array containing any combination
// of elements that add up to exactly the targetSum. If there is no combination that
// adds up to the targetSum, then return null.

// if there are multiple combinations possible, you may return any single one.

//Methodology Approach
// This exercise is almost the same but here I want to return a combination of numbers 
// that leads to the targetSum.

const howSum = (targetSum, numbers)=>{
    if(targetSum === 0)return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null){
            return [...remainderResult, num ];
        }
    }
};
