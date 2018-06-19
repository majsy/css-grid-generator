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
      <div className="interactiveItem">
        <label htmlFor={name}>{ camelToTitle(name) }:</label>
        <input type="checkbox"
          name={name}
          id={name}
          onChange={this.onCheckboxChange} />
      </div>
    )
  }
}