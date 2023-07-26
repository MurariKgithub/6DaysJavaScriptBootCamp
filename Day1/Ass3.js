//1. Create an empty array called cars.  
let cars = []
console.log("1. Create an empty array called cars.\n")
//2. Add three car objects to the cars array .Each car object should have the foll pro:
// make:"Toyota"
// model:"Carry"
// year:2018
console.log("2. Add three car objects to the cars array .Each car object should have the foll pro.")
let car1 = {make:"Toyota",model:"Camry",year:2018};
let car2 = {make:"Activa", model:"7G", year:2023};
let car3 = {make:"honda", model:"HF Deluxe", year:2010};
cars.push(car1)
cars.push(car2)
cars.push(car3)
console.log(cars,"\n");

// 3. Remove the first car object from the cars
cars.shift()
console.log("3. Remove the first car object from the cars");
console.log(cars,"\n");

// 4. Add a new car object to the cars array.
// with the properties :
// make: Honda
// model: "Civic"
// year: 2020
let car4 = {make:"Honda",model:"Civic",year:2020};
cars.push(car4);
console.log("4. Add a new car object to the cars array.");
console.log(cars,"\n");

//5. Update the model property of the second car object in the array to Accord.
cars[1].model = 'Accord';
console.log("5. Update the model property of the second car object in the array to Accord.");
console.log(cars,"\n");

//6. Print the final cars array after performing the above operation
console.log("6. Print the final cars array after performing the above operation.");
console.log(cars,"\n");

