import React from 'react';
import '../../scss/components/_button-amount.scss';

export default class ButtonRemove extends React.Component {
  handleClickRemove = () => {
    this.props.handleClickRemove();
  }

  render() {
    return (
      <div>
        <button className="buttonAmount" onClick={this.handleClickRemove}>
          -
        </button>
      </div>
    )
  }
}