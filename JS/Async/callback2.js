let stock = {
  Fruits : ['Strawberry', 'grapes', 'Banana', 'apple'],
  liquid : ['water', 'ice'],
  holder : ['cone', 'cup', 'stick'],
  toppings : ['choclate', 'peanuts']
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`Order placed and ${stock.Fruits[Fruit_name]} was selected`);
    call_production(Fruit_name);
  },2000);
};

let production = (Fruit_name) => {
  setTimeout(() => {
    console.log(`Production has started`);
    setTimeout(()=>{
      console.log(`The ${stock.Fruits[Fruit_name]} has been chopped`);
      setTimeout(()=>{
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} have been added`);
        setTimeout(()=>{
          console.log(`Machine has been started`);
          setTimeout(()=>{
            console.log(`Container:${stock.holder[0]} is selected`);
            setTimeout(()=>{
              console.log(`${stock.toppings[0]} has been selected as topping`)
              setTimeout(()=>{
                console.log(`Serve the Ice Cream`);
              },2000);
            },3000);
          },2000);
        },1000)
      },1000)
    },2000);
  },0000);
};
order(1,production);
