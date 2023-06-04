const React = require("react");
const ReactDom = require("react-dom/client");
const store = require("./store.jsx");
const AppView = require("./component/AppView.jsx");
const Provider = require("react-redux").Provider;     




ReactDom.createRoot(
    document.getElementById("app")
)

  .render(
    <Provider store={store}>
      <AppView />
    </Provider>
  )