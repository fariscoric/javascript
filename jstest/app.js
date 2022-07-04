function prviZadatak() {
    let value = prompt("Unesite broj");
    console.log(`The pow of ${value} is ${value*value}`);
}

prviZadatak();

//=====================================================================

function drugiZadatak() {
    const CART_DATA = [
        {
          id: 1,
          name: "Hawai Shirt",
          price: 30,
          amount: 2,
          categorty: "summer",
          rating: 4.5,
        },
        {
          id: 3,
          name: "Adidas Slippers",
          price: 35,
          amount: 1,
          categorty: "summer",
          rating: 4.5,
        },
        {
          id: 6,
          name: "White T-Shirt",
          price: 15,
          amount: 4,
          categorty: "summer",
          rating: 4.7,
        },
        {
          id: 4,
          name: "Summer hat",
          price: 7.5,
          amount: 3,
          categorty: "summer",
          rating: 40,
        },
      ];
      let totalsName = CART_DATA.map((el) => {
        return {name: el.name, totalPrice: el.price * el.amount};
      })
      let initialValue = 0;
      const totalNumber = CART_DATA.reduce(function(previousValue, currentValue) {
        return (previousValue+currentValue.amount);
      },initialValue);
      let shipping = 320;
      const totalSum = totalsName.reduce(function(prevValue, currValue,) {
        return (prevValue+currValue.totalPrice);
      },shipping);
      console.log(`You got ${totalNumber} products in cart, shipping cost is ${shipping}, your total is ${totalSum}`);
}

drugiZadatak();


//===========================================================

function treciZadatak() {
    var url = 'new URLSearchParams' + $.param({page: 2});
    async function treci() { 
    response = await fetch(url);
    responseJson = await response.json;
    console.log(responseJson)
}
    treci()
}
//pojma nemam
treciZadatak();