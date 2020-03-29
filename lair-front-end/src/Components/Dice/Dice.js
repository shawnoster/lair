import React, { Component } from "react";
import axios from "axios";
import propTypes from "prop-types";
import API from "../../Utils/API";

const Dice = props => {

//  const {dice, roll} = this.props;

  return (
    <div>
      <h1>Dice</h1>
    </div>
  );
};

export default Dice;

Dice.propTypes = {
  dice: propTypes.string,
  roll: propTypes.string
};
