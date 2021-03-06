import React from 'react';
import { camelToTitle } from '../../helper.js';
import '../../../scss/components/interactive-items/_input.scss';
// import '../../../scss/components/interactive-items/_input.scss';

export default class Input extends React.Component {

  onInputChange = (e) => {
    this.props.onInputChange(e);
  }

  render() {
    const { name, defaultValue, className } = this.props;

    return (
      <div className="interactiveItem">
        <label htmlFor={name}>{ camelToTitle(name) }:</label>
          <input id={name}
            type="number" 
            name={name} 
            onChange={this.onInputChange} 
            value={defaultValue}
            className="input" />
      </div>
    )
  }
}