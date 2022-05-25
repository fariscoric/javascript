const cars = ["BMW", "Audi", "Smart"];

cars.push("Mercedes","Mini","Fiat");

cars.unshift("Ford","Kadilak",4,"nesto");

const shiftValue = cars.shift();
const popValue = cars.pop();
cars.reverse();
console.log(cars);


const imena = ["Faris", "Isko", "Aldin"];
const age = [20,100,50,120,200,76];
const spojeniNiz = imena.concat(age);
console.log(spojeniNiz); 

const trazenaVrednost = cars.find(el => el==="Smart");
console.log(trazenaVrednost)

const trazeniIndeks = age.findIndex(el => el<100);
console.log(trazeniIndeks);

// const godine = [12, 76, 26, 6, 23, 21, 29, 16];
// const drugeGodine = [12,76,8,10,5,14,28,98,101];

// function returnNonAdults(ages) {

// const nonAdults = [];

//     for (const age of ages) {

//         if (age < 18) {
//             nonAdults.push(age);
//         }

//     }

//     return nonAdults;
// }


// console.log(returnNonAdults(drugeGodine));