import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/container";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User />
      </div>
    </Provider>
  );
}

export default App;
