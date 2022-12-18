/*Задание #4
а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
б) Создать класс Категория, имеющий переменные имя и массив товаров. Создать несколько объектов класса Категория. 
в) Создать класс Basket, содержащий массив купленных товаров. 
г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User.*/

class Product{
    name;
    price = 0;
    rating = 0;
    constructor(name, price, rating){
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
}

class Category {
    name;
    products;
    
    constructor(name){
        this.name = name;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
    
}



class Basket{
    byProducts = [];
    
    addProduct(product) {
        this.byProducts.push(product);
    }
}

class User {
    login;
    password;
    basket;
    constructor(login, password, basket){
        this.login = login;
        this.password = password;
        this.basket = basket;
    }

    addProduct(product) {
        this.basket.addProduct(product);
    }
}

let milk = new Product("Молоко", "1.50", "5");
let bread = new Product("Хлеб", "2.00", "6");
let meat = new Product("Мясо", "14.00", "7");
let shampoo = new Product("Шампунь", "14.00", "7");
let soap = new Product("Мыло", "14.00", "7");

let food = new Category("Еда");
let householdСhemicals = new Category("Бытовая химия");

food.addProduct(milk);
food.addProduct(bread);
food.addProduct(meat);

householdСhemicals.addProduct(shampoo);
householdСhemicals.addProduct(soap);

let basket = new Basket();

let person = new User("hp@.mail.ru", "1111", basket);

person.addProduct(milk);
person.addProduct(meat);
person.addProduct(shampoo);

//console.log(person);