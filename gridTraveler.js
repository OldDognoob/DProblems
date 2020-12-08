// Lets say that we are traveling on a 2D grid. We begin in the top-left
// corner and our target is to travel to the bottom-right corner.
// We can only move down or right.(no other moves to do)

// In how many ways can you travel to the target on a grid with dimensions m * n?
// your function gridTraveler(m,n) will calculate this trip.

//Methodology Approach
// 1. if our function is gridTraveler(2,3) means how we will travel in a grid with dimensions
// 2 by 3? There are 3 ways to travel.
// 3. if the function is griTraveler(1,1) means there is 1 way of traveling
// 4. And if the function is gridTraveler(0,1) or(1,0) or(0,0) then means the grid is empty.
//5. Lets calculate now gridTraveler(3,3) so we want to travel in a grid with dimensions 3 by 3
//                
// m the number of columns

const gridTraveler = (m, n, memo = {}) =>{
    const key = m + ',' + n;
    if(key in memo)return memo[key];
    // are the arguments in the memo stored?
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    // return gridTraveler(m - 1, n)+ gridTraveler(m, n - 1);
    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key];
};

console.log(gridTraveler(1,1)); // 1
console.log(gridTraveler(2,3)); // 3
console.log(gridTraveler(3,2)); // 3
console.log(gridTraveler(3,3)); // 6
console.log(gridTraveler(19,19)); // 9075135300
