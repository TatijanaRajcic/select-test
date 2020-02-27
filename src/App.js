import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Select from 'react-select';
import { colourOptions } from './docs/data';

export default class App extends Component {

  state = {
    selectedColors: null
  }

  handleState = (selectedColor, x, y) => {
    console.log(">>>", x, y);
    
    this.setState({selectedColors:selectedColor})
  }

  render() {

    var arrayOfColors = this.state.selectedColors

    return (
      <div className="App">
        <Select
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange = {this.handleState}
          value={arrayOfColors}
        />
      </div>
    )
  }
}

