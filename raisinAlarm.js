// 'raisinAlarm' function takes an array of cookie ingredients('cookie')
const raisinAlarm = function(cookie) {
// uses the includes method to check whether the array contains a raisin ("🍇")
  if (cookie.includes("🍇")) {
// If a raisin is present the function returns "Raisin alert". else it returns "All good"
     return "Raisin alert!";
   } else {
     return "All good!";
   }
 };


// or with out using the includes method

// const raisinAlarm = function(cookie) {
//   // raisinAlarm function uses for loop to iterate through each element of cookie array
//   for (let i = 0; i<cookie.length; i++) {
//     // If a raisin ("🍇") is detected the it will return "Rasin alert!" otherwise it will return "All good!"
//     if (cookie[i] === "🍇") {
//       return "Raisin alert!";
//     } else {
//       return "All good!";
//     }
//   }
// };

// To test the function we can use the provided test cases like this:
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


// Stretch exercise see if u can make a new function that supports arrays of arrays. ur function should return an array of responses instead of a single response. u can add new function to your existing raisin.file

//'raisinAlarmArray' function takes an array of arrays as input and returns the result. it 1st initalize an empty array as 'result' to store individual results.
const raisinAlarmArray = function(cookies) {
  let result = [];
  // Loops through each subarray using a for loop. checking the presence of raisin. If raisin is found it sets raisinFound flag to true and breaks out of loop.
  for (let i = 0; i<cookies.length; i++){
    let cookie = cookies[i];
    // let raisinFound = false;
    // for (let j = 0; j<cookie.length; j++) {
    //   if(cookie[j] === "🍇" ) {
    //     raisinFound = true;
    //     break;
    //   }
    // }
    // if (raisinFound) {
      // Finally it pushes the appropriate result string into result based on whethwer a raisin was found
    //   result.push("Raisin alert!");

    // } else {
    //   result.push("All good!");
    // }
    result.push(raisinAlarm(cookie));
  }
  return result;
}
// To test the function with test case
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

