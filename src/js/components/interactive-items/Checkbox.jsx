import React from 'react';
import '../../../scss/components/_button-amount.scss';

export default class Checkbox extends React.Component {
  handleCheckboxInput = () => {
    this.props.handleCheckboxInput();
  }

  render() {
    return (
      <div className="interactive-item">
        Stretch Columns:
        <input type="checkbox"
          onChange={this.handleCheckboxInput} />
      </div>
    )
  }
}