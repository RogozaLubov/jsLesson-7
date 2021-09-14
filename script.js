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
// let phones =[];

// function addContact(params) {
//     let name = document.getElementById("name").value ;
//     let phone = document.getElementById("phone").value ;

//     phones.push(){
//         name: name,
//         phone: phone,

//     }
// }