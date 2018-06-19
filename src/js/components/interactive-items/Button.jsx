import React from 'react';
import { camelToTitle } from '../../helper.js'
import '../../../scss/components/_button-amount.scss';

export default class Button extends React.Component {

  onButtonClick = (e) => {
    this.props.onButtonClick(e);
  }

  renderButtonIcon() {
    if (this.props.name === 'addItem') {
      return '+';
    } else {
      return '-';
    }
  }

  render() {
    const { name } = this.props;

    return (
      <div className="interactive-item">
        <label>{ camelToTitle(name) }:</label>
        <button className="buttonAmount" 
          onClick={this.onButtonClick}
          name={name}>
          {this.renderButtonIcon()}
        </button>
      </div>
    )
  }
}