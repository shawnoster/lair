import React, { Component } from "react";
import API from "./Utils/API";


import "./App.css";

class App extends Component {
  state = {
    roleResult: [],
    dice: ""
  };

  //TODO Get the Post Method Working
  async componentDidMount() {
    await API.get("/").then(response => {
      const roleResult = response.data;
      console.log("What is Response", response);
      this.setState({ roleResult });
      console.log("Returned Data", roleResult);
    });
  }

  handleChange = event => {
    this.setState({ dice: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const dice = { dice: this.state.dice };

    API.put( `/${dice}`)
    .then(response => {
      console.log("This is the response from Post", response);
      console.log("This is the response data from Post", response.data);
    })
  };



  render() {
    const { roleResult } = this.state;
    const { handleChange, handleSubmit} = this

    return (
      <div className="App">
        <h1>ROLLING STUFF....</h1>
        <div style={{marginBottom: '50px'}}>
          You Rolled a {roleResult.dice}. You got {roleResult.roll}
        </div>
        <form onSubmit={handleSubmit}>
          <label>Pick Your Dice</label>
          <input type="text" dice="dice" onChange={handleChange}/>
          <button type="submit">Roll!</button>
        </form>

       
      </div>
    );
  }
}

export default App;
