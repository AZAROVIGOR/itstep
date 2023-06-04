const React = require("react");

const connect = require("react-redux").connect;
const actions = require("../action/action.jsx");
const Form = require("./Form.jsx");

const AppView = (props) => {
    return <>
        <Form onPostAdd={props.addPost} />
    </>
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

module.exports = connect(mapStateToProps, actions)(AppView);