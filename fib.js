// Write a function `fib(n)` that takes in a number as an argument. 
//The function should return the n-th number of the Fibonacci sequence.

// Methodology Approach:
// In the Fibonacci approach the 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previews two.

//fib(n): 1,1,2,3,5,8,13,21,34.

//n:      1,2,3,4,5,6,7,8,9.

//The 7th number in the fibonacci sequence is the number 13, because 8 plus 5 gives us number 13.

//memoization
// to store some info so i can use it after
// js object, keys will ne th argument to fn , value will be the return value

const fib = (n,memo = {}) => {
    //taking the number n and return the nth number of the fibonacci sequence
    //we are trying to solve this recursively.
    // recursion method is the method of solving a problem where
    // the solution depends on solutions to smaller instances of the same problem.

    // if we want to call the fib function the memo which we used up there in line 18,
    // it contains a new js object.
    // the memo will going to store the n and the return values of the function
    if(n in memo)return memo[n];
    //in this case which we are building , we asking is the current n , i am looking 
    // for stored inside the memo that i created and insert in line 18 ;
    // and searching if some key is stored in the js function in the memo
    // so i am checking if this argument is in the memo?
    
    // But! if it not in the memo then we need to make manual calculations.


    if (n<=2) return 1;
    // in order to calculate the fibonacci number you need to calculate the sum of the previous 
    
    // i m passing the memo object to my recursive function, because I want all the recursive functions to access
    // the same memo, so i passing the object to the calls
    memo[n]=fib(n-1, memo) + fib(n-2, memo);
    // store the result inside of the memo
    // the key we are using is the argument we use first

    return memo[n];
};
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(40)); //102334155
// in the first three runs the computer gives us easy and fast the correct answers
// however for the largest number is calculating so it means it goes slow takes memory to make the calculations

// with the memoization the return of the largest number is now faster than the previous time.
