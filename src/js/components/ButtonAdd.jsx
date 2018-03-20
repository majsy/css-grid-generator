import React from 'react';
import '../../scss/components/_button-amount.scss';

export default class ButtonAdd extends React.Component {
  handleClickAdd = () => {
    this.props.handleClickAdd();
  }

  render() {
    return (
      <div className="interactive-item">
        <label>Add Item:</label>
        <button className="buttonAmount" onClick={this.handleClickAdd}>
          +
        </button>
      </div>
    )
  }
}