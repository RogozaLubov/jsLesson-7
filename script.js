//Task 1
//Map
let human =[
    {name: 'Victoria', age: 26 },
    {name: 'Marshal', age: 30 },
    {name: 'Helen', age: 15 },
    {name: 'Boris', age: 25 },
];
const newHuman = human.map(persone => {
    if (persone.age >= 21){
    return true
 }else {
     return false
 }
})
console.log (newHuman)
//Some
const someHuman = human.some(adult);
function adult(humans) {
    return humans.age >= 18;
    
}
console.log(someHuman);
//Every
const everyHuman = human.every(person=> person.name!== undefined)
console.log(everyHuman)
//Reduce

const sumAge = human.reduce((arr,human) => {
      return arr + human.age
}, 0)

console.log (sumAge);

//====Task2====

let user0 = {
    firstName: "Viktor",
    lastName: "Vlasenko",
    parentsName: "Nikolaevich",
    phone: "380948327463",
};
let user1 = {
    firstName: "Vasya",
    lastName: "Dmitrov",
    parentsName: "Petrovich",
    phone: "380992343412",
};
let user2 = {
    firstName: "Victoria",
    lastName: "Strii",
    parentsName: "Nikolaevna",
    phone: "380672303932",
};
let user3 = {
    firstName: "Аlex",
    lastName: "Serebkin",
    parentsName: "Albertovich",
    phone: "380992332434",
};
let users = [user0, user1, user2, user3];

//task2 ,A

   const FirsLetterName = users.find(person=>person.firstName[0] === person.lastName[0])
   console.log(FirsLetterName)

//task2 ,B
function transformInitials(inValue) {
    let result = inValue.map(item => [item.lastName, item.firstName[0], item.parentsName[0]].join(" "));
    
    return result;
}
console.log(transformInitials(users));

//task2 ,C

const serchPhone = users.find(person => person.phone === '380992332434')
console.log (serchPhone)

//task2 ,D
function searchPhoneTrue(inValue, phone) {
    let result = inValue.some(item => item.phone == phone);
    return result;
}
console.log(searchPhoneTrue(users, 380672303932));

