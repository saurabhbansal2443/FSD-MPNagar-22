//  Higher Order functionm --- Either it should be a callback function or if it returns a function it is called HOF

//  forEach

// let arr = [1, 2, 3, 4, 5, 6];

// function print(ele, index, arr) {
//   console.log(ele, index, arr);
// }

// arr.forEach(print);

// arr.forEach(function print(ele, index, arr) {
//   arr[index] = ele*2
// });

// Pure Functions --  A function will output the same result for same input 

// Map -- 


let arr = [1, 2, 3, 4, 5, 6];

let ans = arr.map(function(ele , index , array){
    return ele*2 ; 
})

console.log(ans)

// filter

// reduce
