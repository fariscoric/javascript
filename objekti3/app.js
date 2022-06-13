// const students = [
//     {name: "Faris", grade: 8,year: 2},
//     {name: "Isko", grade: 10,year: 4},
//     {name: "Aldin", grade: 8,year: 2},
//     {name: "Amina", grade: 9,year: 4},
//     {name: "Saboma", grade: 9,year: 3},
//     {name: "Denis", grade: 7,year: 4},
//     {name: "Senad", grade: 6,year: 1},
// ]

// function getAvgGrade(array) {
//     arrayGrades = array.map((array) => array.grade);
//     sumGrade = arrayGrades.reduce((prevValue, currValue) => prevValue+currValue);
//     avgSum = sumGrade/arrayGrades.length
//     return avgSum.toFixed(2);
// }

// console.log(getAvgGrade(students));

const person = {
    name: "John Doe",
    age: 22,
};

function sayHello() {
    console.log(`Hello ${this.name}`)
}

sayHello.call(person);


let obj = { food: "Ljep"}
function favFood(text, rating) {
    return `${this.food} ${text} ${rating}`;
}

console.log(favFood.call(obj, "je ukusan", 9))

console.log(favFood.apply(obj, ["nije ukusan", 6]));

const bindFunc = favFood.bind(obj);
console.log(bindFunc("nije nesto", 2));


const ime = "John Doe";
const zanimanje = "ubica";
const godine = 40;

console.log(`${ime} je ${zanimanje} i ima ${godine} godina`);



















