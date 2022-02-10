import "./App.css";
import React from "react";
import BurgerComponent from "./components/BurgerComponent";
import MenuComponent from "./components/MenuComponent";

class App extends React.Component {
  render() {
    return (
      <div className="main-body">
        <BurgerComponent></BurgerComponent>
        <MenuComponent></MenuComponent>
      </div>
    );
  }
}

export default App;
