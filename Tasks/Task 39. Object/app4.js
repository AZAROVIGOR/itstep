//

let car = {
    fuel: "disel",
    brend: "VW",
    model: "Polo",
    print(){
        console.log(`Марка: ${this.brend}\nМодель: ${this.model}`);
    }
    
}


let auto = {
    country: "Germany",
    ___proto__: car,
    drive(){
        console.log(`Страна производитель: ${this.country}`);
    }
}

let plan = {
    engine: "4",
    __proto__: car,
    fly(){
        console.log(`Самолет имеет ${this.engine} двигателя`);
    }
}

let train = {
    cargo: "74",
    ___proto__: car,
    count(){
        console.log(`${this.cargo} вагона в поезде`);
    }
}

car.print();
auto.drive();
plan.fly();
train.count();