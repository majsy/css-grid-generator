import React from 'react';
// import '../../scss/components/_button-amount.scss';

export default class Input extends React.Component {

  handleInput = (e) => {
    // const max = this.props.max;

    // if (max) {
    //   if (value > max) {
    //   value = max;
    //   console.log('max value for', this.props.label, ':', max)
    //   }
    // }
    
    this.props.handleInput(e);
  }

  render() {
    return (
      <div className="input">
        <label htmlFor="numericInput">{this.props.label}:</label>
        <input id="numericInput"
         type="number" 
         name={this.props.name} 
         onChange={this.handleInput} 
         className="input" />
      </div>
    )
  }
}