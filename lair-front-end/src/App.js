import React, { Component } from "react";
import Dice from "./Components/Dice/Dice";
import API from './Utils/API'

import "./App.css";

class App extends Component {

  state = {
    dice: '',
    roll:'',
  }

  render() {

  return (
    <div className="App">
      <h1>DICE ROLLING STUFF</h1>
      <Dice/>
    </div>
  );
  }

  async componentDidMount() {
    let diceData = await API.get('/', {
      params: {
        results: 1,
        inc: 'dice, roll'
      }
    });
    diceData = diceData.data.results[0];
  }

}


export default App;
