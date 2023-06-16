const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);

store.dispatch({
   type: "SET_POST",
    posts: [
        {
            id: 1,
            name: "",
            text: "",
            image: 1,
        }
    ],
    lastIdPost: 1
});




module.exports =  store;

