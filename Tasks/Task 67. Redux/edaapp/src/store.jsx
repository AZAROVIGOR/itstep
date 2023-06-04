const reduser = require("./reduser/reduser.jsx");      // импортируем наш reduser из паки  (адресс)
const redux = require("redux");                     // импортируем  redux из redux

const store = redux.createStore(reduser); // создаем наш store(Хранилище) с указанием параметра созданного reducer

store.dispatch({
    type: "INIT",
    user: {
        name: "Вася Пупкин",
        age: 30
    },
    products: [
        {
            id: 1,
            name: "Молоко",
            price: 5,
            quantity: 1,
            productUnit: "kg",
            favorite: false,
           
        }
    ],
    lastIdProduct: 1
});

module.exports = store;
