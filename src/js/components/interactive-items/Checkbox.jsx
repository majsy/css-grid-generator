import React from 'react';
import { camelToTitle } from '../../helper.js'
// import '../../../scss/components/_button-amount.scss';

export default class Checkbox extends React.Component {
  onCheckboxChange = () => {
    this.props.onCheckboxChange();
  }

  render() {
    const { name } = this.props;

    return (
      <div className="interactive-item">
        { camelToTitle(name) }:
        <input type="checkbox"
          onChange={this.onCheckboxChange} />
      </div>
    )
  }
}