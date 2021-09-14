//Task 1
//Map

let word =['one' , 'two']

 function map(arr,mapper) {
     let result = []
     for (let i=0; i<arr.length; i++ ){
        result[i] = mapper(arr[i]);
    }
    return result;
 }

console.log(map(["one","two"], s => s[1] === "a")); 
//Some
function  some(arr, predicate) {
    for (let i=0; i<arr.length; i++ ){
        if (predicate(arr[i])) return true;
    }
    return false;
}
console.log(some(["one","two"], s=>s==="one")); //true
console.log(some(["one","two"], s=>s==="rrr")); //false

//Every
function every(arr, predicate) {
    for (let i=0; i<arr.length; i++ ){
        if (!predicate(arr[i])) return false;
    }
    return true;
}

console.log(every(["one","two"], s=>s==="one")); //false
console.log(every(["one","two"], s=>s.length==3)); //true
//Reduce
function reduce(arr, predicate,startValue) {
    var i, length = arr.length, result = startValue;
  for (i = 0; i < length; i = i + 1) {
    result = predicate.call(null, result, arr[i], i, arr);
  }
  return result;
};
console.log (reduce(["one","two"],s=>s==="one"))
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

