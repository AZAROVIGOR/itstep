const connect = require("react-redux").connect;
const actions = require("../action/action.jsx");

const AppView = (props) => {
    return <h1>Hello</h1>
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

module.exports = connect(mapStateToProps, actions)(AppView);