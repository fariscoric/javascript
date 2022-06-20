posao = new Promise((resolve, reject) => {
    response = 400;

    for (let i = 0; i <90000000; i++) {}
    if (response === 400) {
        resolve([1, 2, 3, 4, 5]);
    } else {
        reject("GRESKAAAAAA!!!");
    };
});

posao
.then ((data) => {
    console.log("Uspesno povukao podatke", data);
}) 
.catch ((err) => {
    console.log("Neusposno povukao podatke", err);
})