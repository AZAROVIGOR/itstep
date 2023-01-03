class Engine {
    power;
    company;

    constructor(power, company) {
        this.power = power;
        this.company = company;
    }

    toString() {
        return `${this.power}, ${this.company}`;
    }
}


class Person {
    age;
    fullName;

    constructor(age, fullName) {
        this.age = age;
        this.fullName = fullName;
    }

    toString() {
        return `Возраст: ${this.age},Полное имя: ${this.fullName}`;
    }
}

class Client extends Person {
    adres;
    payment;

    constructor(age, fullName, adres, payment) {
        super(age, fullName);
        this.adres = adres;
        this.payment = payment;
    }
    toString() {
        return `Возраст : ${this.age}, Полное имя: ${this.fullName}, Адресс: ${this.adres}, Способ оплаты : ${this.payment} `
    }
}


class Driver extends Person {
    experiense;

    constructor(age, fullName, experiense) {
        super(age, fullName)
        this.experiense = experiense;
    }

    toString() {
        return `${this.age}, ${this.fullName}, ${this.experiense}`;
    }
}


class Car {
    carClass;
    marka;
    engine;
    driver;
    constructor(carClass, marka, engine, driver) {
        this.carClass = carClass;
        this.marka = marka;
        this.engine = engine;
        this.driver = driver;
    }

    start() {
        console.log("Машина поехала");
    }

    stop() {
        console.log("Машина остановилась");
    }

    turnRight() {
        console.log("Поверните на право");
    }

    turnLeft() {
        console.log("Поверните на лево");
    }

    toString() {
        return (`${this.carClass}, ${this.marka}, ${this.engine}, ${this.drive}`);


    }
}

class Taxi extends Car {
    tariff;

    constructor(carClass, marka, engine, driver, tariff) {
        super(carClass, marka, engine, driver);
        this.tariff = tariff;
    }
    toString() {
        return `Класс авто: ${this.carClass}, марка авто: ${this.marka}, двигатель: ${this.engine.toString()}, водитель: ${this.driver.toString()}, тариф: ${this.tariff}; `
    }

}



class Lorry extends Car {
    carrying;

    constructor(carClass, marka, engine, driver, carrying) {
        super(carClass, marka, engine, driver)
        this.carrying = carrying;
    }

    toString() {
        return `${this.carClass}, ${this.marka}, ${this.engine}, ${this.drive}, ${this.carrying}`;
    }

}

class SportCar extends Car {
    speed;

    constructor(carClass, marka, engine, driver, speed) {
        super(carClass, marka, engine, driver);
        this.speed = speed;
    }

    toString() {
        return `${this.carClass}, ${this.marka}, ${this.engine.toString()}, ${this.drive}, ${this.speed}`;
    }
}

class Order {
    distance;
    taxi;
    client;

    constructor(taxi, client, distance) {
        this.distance = distance;
        this.taxi = taxi;
        this.client = client;
    }
    getPrice() {
        return `Сумма заказа - ${this.distance * this.taxi.tariff}`
    }
    toString() {
        return `Имя клиента - ${this.client}, Расстояние - ${this.distance}км, ${this.getPrice()}`
    }
}

let engineRolls = new Engine("560 л.с.", "Rolls-Royce Motor Cars");
let engineBmw = new Engine("520 л.с.", "BMW");
console.log(engineRolls);
console.log(engineBmw);
engineRolls.toString()
engineBmw.toString()


let firstExperiense = new Driver("53 года", "Михаэль Шумахер", "20лет");
let secondExperiense = new Driver("50 лет", "Рубенс Баррикелло", "18лет");
console.log(firstExperiense)
firstExperiense.toString();
secondExperiense.toString();


let lorry = new Lorry("Грузовик", "Volvo", engineBmw, secondExperiense, "опасные грузы");
console.log(lorry);
lorry.toString();

let sport = new SportCar("Спорткар", "BMW", engineRolls, firstExperiense, "350 км/ч");
console.log(sport);
sport.toString();

let person = new Person(25, "Валера");
console.log(person);
console.log(person.toString());




let client = new Client(25, "Валера", "Московски пр-т", "наличными");
console.log(client);
console.log(client.toString());


//carClass, marka, engine, driver, tariff
let driver = new Driver("25", "Василий Иванович", 10)
let taxi = new Taxi("Легковой", "BMW", engineBmw, driver, 5);
console.log(taxi);
console.log(taxi.toString());

let order = new Order(taxi, client, 10);
console.log(order);
console.log(order.getPrice());
console.log(order.toString());









