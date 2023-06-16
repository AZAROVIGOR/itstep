const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);

store.dispatch({
   type: "SET_POST",
    posts: [
        {
            id: 1,
            title: "Название",
            text: "Текст",
            image: "no-image.png",
            date: new Date(),
            favorite: 0,
        }
    ],
    lastIdPost: 1
});




module.exports =  store;

