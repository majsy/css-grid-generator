import React from 'react';
import { camelToTitle } from '../../helper.js'
import '../../../scss/components/interactive-items/_button.scss';

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
      <div className="interactiveItem">
        <label htmlFor={name}>{ camelToTitle(name) }:</label>
        <button className="button" 
          onClick={this.onButtonClick}
          name={name}
          id={name}>
          {this.renderButtonIcon()}
        </button>
      </div>
    )
  }
}