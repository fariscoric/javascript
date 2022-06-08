const myCar = {
    marka: "Audi",
    model: "A4",
    boja: "crvena",
    pogon: 'prednji',
    menjac: "automatski",
    servis: {
        datum: "2. maj",
        km: 240000,
        serviser: "Pasovic",
    }
};

console.log(myCar);
console.log("Moj auto je marke: ",myCar.marka);
console.log("Moj auto je boje : ",myCar["boja"]);
console.log("Serviser je: ", myCar.servis.serviser);
// console.log("Serviser je: ", myCar['servis']['serviser']);

//object.key === object["key"]


const radnik = {
    firstName: 'Bob',
    lastName: 'Euroblok',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
    adresa: '{
        ulica: 'Avnoja',
        broj: 'bb',
        grad: 'Novi Pazar',
        getAdress: function () {
            return this.ulica + " " + this.broj + " " + this.grad;
        }'
    }
};

console.log(radnik);
