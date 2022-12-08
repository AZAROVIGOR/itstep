//1. Создайте пустой объект user.

let user = {};

//2. Добавьте свойство name со значением John.

user.name = "John";
console.log(user);

//3. Добавьте свойство surname со значением Smith.

user.surname = "Smith";
console.log(user);
//4. Измените значение свойства name на Pete.

user.name = "Pete";
console.log(user);

//5. Удалите свойство name из объекта.

delete user.name
console.log(user);

//6. Пусть дан объект с зарплатами сотрудников.Найти сумму зарплат с использованием for..in.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum)



//7. Дан объект .Написать код, который создает его точный клон (новый объект с такой же структурой).

let user1 = {
    name: "Иван",
    age: 30
};

// Option 1

let newUser1 = Object.assign({}, user1, {name: "Вася", age: 15});
let newUser2 = ({...user1, name:"Петя", age: 25});
let newUser3 = {};
for(let key in user1){
    newUser3[key] = user1[key];
}
console.log(newUser1)
console.log(newUser2)
console.log(newUser3)



//8. Дан объект.Написать код, который создает его точный клон(новый объект с такой же структурой).
let userA = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};

let newUserA = {};
for(let key in userA){
    if(userA[key] != "object")
    newUserA[key] = userA[key];
    else{
        newUserA[key] = {}
        for(let key1 in userA){
            newUserA[key][key1] = user[key][key1];
        }
    }
}

console.log(newUserA);













