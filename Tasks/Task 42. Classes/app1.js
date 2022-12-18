class Engine{
    power;
    company;
    
    constructor(power, company){
        this.power = power;
        this.company = company;
    }

    toString(){
       console.log( `Мощность двигателя: ${this.power}, Мотор компании ${this.company}`);
    }
}


class Person {
        age;
        fullName;
    
        constructor(age, fullName){
            this.age = age;
            this.fullName = fullName;
        }
        
        toString(){
            console.log(`Возраст: ${this.age}, Полное имя: ${this.fullName}`);
        }
}


class Driver extends Person{
    experiense;

    constructor(age, fullName, experiense){
        super(age, fullName)
        this.experiense = experiense;
    }

    toString(){
        console.log(`Стаж вождения: ${this.experiense}`);
    }
}


class Car {
    carClass;
    marka;
    engine;
    driver;
    constructor(carClass, marka, engine, driver){
        this.carClass = carClass;
        this.marka = marka;
        this.engine = engine;
        this.driver =  driver;
    }

    start(){
        console.log("Машина поехала");
    }

    stop() {
        console.log ("Машина остановилась");
    }

    turnRight() {
        console.log ("Поверните на  право");
    }

    turnLeft() {
        console.log("Поверните на лево");
    }

    toString() {
        console.log(`Машина марки: ${this.marka} имеет двигатель ${this.engine} Класс машины : ${this.carClass} опыть вождения - ${this.drive}`);


}
}



class Lorry extends Car {
    carrying;
    constructor(carClass, marka, engine, driver, carrying){
        super(carClass, marka, engine, driver)
        this.carrying = carrying;
    }

    toString(){
        console.log(`Грузовик перевозит ${this.carrying}`);
    }

}

class SportCar extends Car{
    speed;

    constructor(carClass, marka, engine, driver, speed){
        super(carClass, marka, engine, driver);
        this.speed = speed;
    }

    toString(){
        console.log(`Максимальня скорость: ${this.speed}`);
    }
}

let engineRolls = new Engine("560 л.с.", "Rolls-Royce Motor Cars");
let engineBmw = new Engine("520 л.с.", "BMW");
console.log(engineRolls);
console.log(engineBmw);
engineRolls.toString()
engineBmw.toString()


let firstDriver = new Person("53 года","Михаэль Шумахер");
let secondDriver = new Person("50 лет","Рубенс Баррикелло");
firstDriver.toString();
secondDriver.toString();


let firstExperiense = new Driver("53 года", "Михаэль Шумахер", "20лет");
let secondExperiense = new Driver("50 лет", "Рубенс Баррикелло", "18лет");
console.log(firstExperiense)
firstExperiense.toString();
secondExperiense.toString();

let car = new Car("Легковой автомобиль", "ВАЗ", "Бензин", "Водитель");

console.log(car);
car.start();
car.stop();
car.turnLeft();
car.turnRight();






let lorry = new Lorry("Грузовик", "Volvo", "Дизель", "Опыт", "опасные грузы");
console.log(lorry);
lorry.toString();

let sport = new SportCar("Спорткар", "BMW", "625л.с.", "Льюис Хэмилтон", "350 км/ч");
console.log(sport);
sport.toString();



