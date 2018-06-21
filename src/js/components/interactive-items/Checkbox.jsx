import React from 'react';
import { camelToTitle } from '../../helper.js'
import '../../../scss/components/interactive-items/_checkbox.scss';

export default class Checkbox extends React.Component {
  onCheckboxChange = () => {
    this.props.onCheckboxChange();
  }

  render() {
    const { name } = this.props;

    return (
      <div className="interactiveItem checkbox">
        <label htmlFor={name}>{ camelToTitle(name) }:
          <input type="checkbox"
            name={name}
            id={name}
            className="checkboxInput"
            onChange={this.onCheckboxChange} />
          <span className="checkboxCustom"></span>
        </label>
      </div>
    )
  }
}