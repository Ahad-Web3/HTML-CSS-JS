let stocks = {
    Fruits : ["Strawberry", 'Grapes', 'Banana', 'Apple'],
    liquid : ['water', 'ice'],
    Holder : ['Cone', 'Cup', 'Stick'],
    Toppings : ['Chocolate', 'sprinkles']
};

let is_shop_open = true;
let order = (time, work) => {
    
    return new Promise( (resolve, reject)=>{

        if(is_shop_open){
            setTimeout(()=>{resolve( work() );},time);
        }else{
            reject(console.log(`Shop is closed, please visit later`));
        }
    } );
};
order(2000,()=>{console.log(`order was placed for ${stocks.Fruits[0]} ice cream`)})
.then(()=>{return order(0000, ()=>{console.log(`Production has started`);})})
.then(()=>{return order(2000, ()=>{ return console.log(`${stocks.Fruits[0]} was chopped`)})})
.then(()=>{return order(1000,()=>{ return console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]} to chopped ${stocks.Fruits[0]}`)})})
.then(()=>{return order(1000, ()=>{console.log('The machine is started')})})
.then(()=>{return order(2000, ()=>{console.log(`${stocks.Toppings[1]} is selected as topping`);})})
.then(()=>{return order(2000, ()=>{console.log(`Ice cream is being served`)})})

.catch(()=>{console.log(`Customer left`)})

.finally(()=>{console.log(`Day ended, shop is closed`)})