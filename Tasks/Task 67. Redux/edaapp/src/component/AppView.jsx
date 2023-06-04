const React = require("react");
const connect = require("react-redux").connect;
const actions = require("../action/action.jsx");
const UserInfo = require("./Userinfo.jsx");
const FormAdd = require("./FormAdd.jsx");
const List = require("./List.jsx");


const AppView = (props) => {           //  в props помещаем все что хотим использовать из хранилища это параметры компонента
   
    return <>
        <UserInfo user={props.currentUser} />
        <FormAdd onProductAdd={props.addProduct} /> 
        <List products={props.products} onProductDelete={props.deleteProduct} onProductFavorite={props.favoriteProduct} onProductUnfavorite={props.unfavoriteProduct} />
    </>;

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentUser: state.user
    }
}

module.exports = connect(mapStateToProps, actions)(AppView);  //mapStateToProps выгружает данные из store в  props  (AppView) в какой компонент мы хотим передать действия и mapStateToProps


//onProductAdd={props.addProduct}  onProductAdd  сами создаем и через props добавляем addProduct   