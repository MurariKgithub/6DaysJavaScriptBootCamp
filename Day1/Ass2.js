//1. Create an empty object called person.
console.log("1. Create an empty object called person.\n");
person = new Object();
console.log("2. Add the following properties to the person object.");
//2. Add the following properties to the person object: -name = "John", -age = 30, -city = New York
person.name = "John";
person.age = 30; 
person.city = "New York";
//display 
console.log(person,'\n');
// 3. Remove the age property from the person object 
console.log("3. Remove the age property from the person object.");
delete person.age;
// display
console.log(person,'\n');
// 4.Add a new Property called job with the value Engineer to the person object
console.log("4.Add a new Property called job with the value Engineer to the person object.")
person.job = "Engineer";
//display
console.log(person,'\n');
//5. Update the city property of the person object to "san francisco"
console.log('5. Update the city property of the person object to "san francisco"');
person.city  = "San Francisco";
//display
console.log(person,"\n");
//6. Print final Person Object after performing the above operations.
console.log("6. Print final Person Object after performing the above operations.");
for (const key in person) {
    console.log("key: "+key+', '+"Value: "+person[key]);
}
