/*Задание #1
а) Создайте класс Phone, который содержит поля number, model и weight.
б) Добавить конструктор в класс Phone, который принимает на вход три параметра для инициализации переменных класса - number, model и weight. 
в) Создайте три экземпляра этого класса. 
г) Выведите на консоль значения их переменных. 
д) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего. Выводит на консоль сообщение “Звонит {name}”. getNumber – 
возвращает номер телефона. Вызвать эти методы для каждого из объектов.
*/

class Phone{
    number;
    model;
    weight;

    constructor(number, model, weight){
        this.number = number;
        this.model = model;
        this.weight = weight;
    }

    receiveCall(name){
        console.log(`Звонит: ${name}`)
    }

    getNumber(number){
        return this.number;
    }

};

let Nokia = new Phone("101", "Nokia", "100");
let Sumsung = new Phone("102", "Sumsung", "120");
let LG = new Phone("103", "LG", "150");

console.log(Nokia, Sumsung, LG);

Nokia.receiveCall("Пожарные");
number = Nokia.getNumber();
console.log(number);


Sumsung.receiveCall("Милиция");
number = Sumsung.getNumber();
console.log(number);



LG.receiveCall("Скорая");
number = LG.getNumber();
console.log(number);










 
