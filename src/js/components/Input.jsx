import React from 'react';

export default class Input extends React.Component {

  handleInput = (e) => {
    this.props.handleInput(e);
  }

  render() {
    return (
      <div className="input">
        <label htmlFor="numericInput">{this.props.name}:</label>
        <input id="numericInput"
         type="number" 
         name={this.props.name} 
         onChange={this.handleInput} 
         className="input"
         value={this.props.defaultValue} />
      </div>
    )
  }
}