import React from 'react';
import { camelToTitle } from '../../helper.js'

export default class Input extends React.Component {

  onInputChange = (e) => {
    this.props.onInputChange(e);
  }

  render() {
    const { name, defaultValue, className } = this.props;

    return (
      <div>
        <label htmlFor={name}>{ camelToTitle(name) }:</label>
          <input id={name}
            type="number" 
            name={name} 
            onChange={this.onInputChange} 
            value={defaultValue}
            className={className} />
      </div>
    )
  }
}