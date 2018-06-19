import React from 'react';

export default class Input extends React.Component {

  handleInput = (e) => {
    this.props.handleInput(e);
  }

  render() {
    const { name, defaultValue, className, label } = this.props;

    return (
      <div>
        <label htmlFor="numericInput">{label}:</label>
          <input id="numericInput"
            type="number" 
            name={name} 
            onChange={this.handleInput} 
            value={defaultValue}
            className={className} />
      </div>
    )
  }
}