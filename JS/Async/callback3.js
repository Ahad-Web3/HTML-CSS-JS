/*
what are callbacks?
calling a function within a function is called a callback.
*/

let stocks = {
    Fruits : ["Strawberry", 'Grapes', 'Banana', 'Apple'],
    liquid : ['water', 'ice'],
    Holder : ['Cone', 'Cup', 'Stick'],
    Toppings : ['Chocolate', 'sprinkles']
};


let order = (call_production,fruit_name,holder_name,top) => {
    setTimeout(()=>{
        console.log(`order has been placed for ${stocks.Fruits[fruit_name]} Icecream`);
        call_production(holder_name,top);
    },2000);
};
let production = (holder_name,top) => {
    setTimeout(()=>{
        console.log("Production has been started");
        setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`);
            setTimeout(()=>{
                console.log(`Machine has started`);
                setTimeout(()=>{
                    console.log(`${stocks.Holder[holder_name]} is selected as Container`);
                    setTimeout(()=>{
                        console.log(`${stocks.Toppings[top]} is selected as Topping`);
                        setTimeout(()=>{
                            console.log(`Ice cream is being served`);
                        },1000);
                    },3000);
                },2000);
            },1000);
        },2000)
    },0000)

};

order(production,0,0,0);