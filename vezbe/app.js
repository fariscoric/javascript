// const person = {
//     name:"John Doe",
//     age: 48,
//     job: "Employed",
//     address: "USA",
//     kids: 4,
// };
// console.log(Object.keys(person));
// console.log(Object.values(person));
// Object.seal(person);
// person.name = "Don Joe";
// console.log(person);
// Object.freeze(person);
// person.name = "Don Johe";
// console.log(person);
// console.log(Object.entries(person));

// person2 = person;
// console.log(Object.is(person,person2));


// const names = ['Faris','Aldin','Senad','Dzenan','Sabina'];

// const newNames = ['Isko', ...names, "Hamza"];
// console.log(newNames);

// const numbers = [1,2,2,3,4,5,6,7,8,9,0];
// const nemaDuplih = [...new Set (numbers)];
// console.log(nemaDuplih);


// const personn = {
//     name:"John",
//     country:"USA",
// }


// const newPerson = {
//     ...personn,
//     age: 48,
//     kids:4,
// }


// console.log(newPerson);



const movies = [
    {title:'Movie 1', rating: 6, budget: '230M'},
    {title:'Movie 2', rating: 5, budget: '30M'},
    {title:'Movie 3', rating: 9, budget: '530M'},
    {title:'Movie 4', rating: 4, budget: '200M'},
    {title:'Movie 5', rating: 9.5, budget: '120M'},
]

const newMoviesArray = movies.map((movie) =>  {
    return {
        title: movie.title,
        budget: movie.budget,
    }

});

console.log(newMoviesArray);

