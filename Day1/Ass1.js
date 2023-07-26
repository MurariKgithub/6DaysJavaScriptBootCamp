//1. create an empty array called fruits
console.log("1. create an empty array called fruits\n");
let fruits = new Array()
//2. Add the following fruits to the fruits array:
// apple,banna, orange
fruits.push("apple")
fruits.push("banana")
fruits.push("orange")
console.log("2.Add the following fruits to the fruits array");
// display
console.log(fruits,"\n")
// 3. Remove the first fruits from the array
console.log("3. Remove the first fruits from the array");
fruits.shift()
//display
console.log(fruits,"\n");
// 4. Add grape to the end of the array 
console.log("4. Add grape to the end of the array ");
fruits.push("grape")
console.log(fruits,"\n");

// 5. Update the second fruit in the array with pear( note: index start from 0)
console.log("5. Update the second fruit in the array with pear");
fruits[1] = "pear"
//display
console.log(fruits,"\n")
//6. Print the final array after performing the above operations.
console.log("6. Print the final array after performing the above operations.");
console.log(fruits.join(', ')+'.')