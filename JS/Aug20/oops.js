

class car{
    constructor(name, brand, com, total_sales){
        this.name = name;
        this.brand = brand;
        this.com = com;
        this.total_sales = total_sales;
    }
}

class child extends car{
    constructor(engine, transmission, suspension, seating, capacity, price, yol){
        super( name, brand, com, total_sales);
        this.engine = engine;
        this.transmission = transmission;
        this.suspension = suspension;
        this.capacity = capacity;
        this.price = price;
        this.yol = yol;
    }
    console.log(this.name);
    console.log(this.brand);
    console.log(this.com);
    console.log(this.total_sales);
    console.log(this.engine);
    console.log(this.transmission);
    console.log(this.suspension);
    console.log(this.capacity);
    console.log(this.price);
    console.log(this.yol);

}

let car1 = new Car