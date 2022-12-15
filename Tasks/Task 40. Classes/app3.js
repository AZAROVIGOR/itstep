/*Задание #3
Рядом с мышью — и гусь велик, но вот рядом с драконом... В этой задаче у нас будут гуси (класс Goose) и драконы (класс Dragon).
 А также их предки, классы BigAnimal или SmallAnimal, кто чей предок — догадайтесь сами. Затем переопределите для Goose и Dragon метод getSize(),
 так, чтобы они выводили строки о размере животного.
*/

class BigAnimal{
    constructor(name){
        this.name = name;
    }
}

class SmallAnimal{
    constructor(name){
        this.name = name;
    }
}

class Goose extends SmallAnimal{
    getSize(){
        console.log(`${this.name}: маленькие животные`)
    }
}

class Dragon extends BigAnimal{
    getSize(){
        console.log(`${this.name}: большие животные`)
    }
}

let goose = new Goose("Гуси");
let dragons = new Dragon("Драконы");

goose.getSize();
dragons.getSize();

