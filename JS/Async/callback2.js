let stock = {
  Fruits : ['Strawberry', 'grapes', 'Banana', 'apple'],
  liquid : ['water', 'ice'],
  holder : ['cone', 'cup', 'stick'],
  toppings : ['choclate', 'peanuts']
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`Order placed and ${stock.Fruits[Fruit_name]} was selected`);
  },2000);
  call_production(Fruit_name);
};

let production = (Fruit_name) => {
  setTimeout(() => {
    console.log(`The ${stock.Fruits[Fruit_name]} has been cut`);
  },2000);
};
order(1,production);
