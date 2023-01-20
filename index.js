// Week 3: Coding Assignment
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Question 1: " + ages);

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//	* Do not use numbers to reference the last element, find it programmatically, 
//	* ages[7] – ages[0] is not allowed!

console.log("Question 1a: " + (ages[ages.length-1] - ages[0]));

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(100);
console.log("Question 1b: " + (ages[ages.length-1] - ages[0]));

// 1c. Use a loop to iterate through the array and calculate the average age.
let totalAge = 0;
for(let i = 0; i < ages.length; i++) {
    totalAge = totalAge + ages[i];
}
console.log("Question 1c: " + totalAge / ages.length);

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("Question 2: " + names);

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let averageNameLength = 0, totalLength = 0;
for (let i = 0; i < names.length; i++) {
    totalLength = totalLength + names[i].length;
}
console.log("Question 2a: " + (totalLength / names.length));
    
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let result = "";
for (let i = 0; i < names.length; i++) {
    result = result + names[i] + " ";
}
console.log("Question 2b: " + result);

// 3. How do you access the last element of any array?
// arrayName.length - 1
console.log("Question 3: arrayName.length - 1");

// 4. How do you access the first element of any array?
// arrayName[0]
console.log("Question 4: arrayName[0]");

// 5. Create a new array called nameLengths. Write a loop to iterate over
// the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("Question 5: " + nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log("Question 6: " + sum);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function wordRepeat(word, n) {
    let count = 1
    let result = "";
    while (count <= n){
        result = result + word;
        count++
    }
    return result;
}
console.log("Question 7: " + (wordRepeat("Hello", 4)));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// • The full name should be the first and the last name separated by a space.
function firstLastName(_firstName, lastName) {
    fullName = _firstName + " " + lastName;
    return fullName;
}
console.log("Question 8: " + (firstLastName("Barry", "Cedergren")));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater 
// than 100.
var numArr = [84, 8, 7, 13, 12]
function overHundred(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum = sum + numArr[i];
    }
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}
console.log("Question 9: " + overHundred(numArr))

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numArray = [1, 2, 3, 4]
function arrayNumReturns() {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum / numArray.length;
}
console.log("Question 10: " + arrayNumReturns());

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array
// is greater than the average of the elements in the second array.
let numArray1 = [5, 6, 7, 8]
let numArray2 = [1, 2, 3, 4]
function arrayNumReturns2() {
    let sum = 0;
    for (let i = 0; i < numArray1.length; i++) {
        sum += numArray1[i];
    }
    numArray1Avg = sum / numArray1.length;
    let sum2 = 0;
    for (let i = 0; i < numArray2.length; i++) {
        sum += numArray2[i];
    }
    numArray2Avg = sum2 / numArray2.length;
    if (numArray2Avg < numArray1Avg) {
        return true;
    } else {
        return false;
    }
}
console.log("Question 11: " + arrayNumReturns2());

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true
// if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true
let moneyInPocket = 11
function willBuyDrink() {
    if (isHotOutside = true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log("Question 12: " + willBuyDrink());

// 13. Create a function of your own that solves a problem. 
// • In comments, write what the function does and why you created it.
// This function is to solve a problem of having a big enough gas tank to take a trip without filling up again:
let milesPerGallon = 20
let numberOfGallons = 20
function canWeMakeIt(distanceTo) {
    let milesAvailable = numberOfGallons * milesPerGallon;
    //return milesAvailable;
    if (distanceTo >= milesAvailable) {
        return "Sorry, you'll run out of gas!";
    } else {
        return "You'll make the trip with enough gas!";
    }
}
console.log("Question 13: " + canWeMakeIt(500));

