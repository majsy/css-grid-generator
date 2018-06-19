import React from 'react';
import { camelToTitle } from '../../helper.js';

export default class Dropdown extends React.Component {

  renderDropdownOptions() {
    const { gridItems, alignment } = this.props;
    const items = gridItems || alignment;
    const options = [];
    
    if (gridItems) {
      for (let i = 0; i < items; i++) {
        options.push(<option value={i+1} key={i}>{i+1}</option>)
      }
      return options
    } else if (alignment) {
      items.forEach((item, i) => {
        options.push(<option value={item} key={i}>{item}</option>)
      })
      return options
    }
  }

  onSelectChange = (e) => {
    this.props.onSelectChange(e);
  }

  render() {
    const { name, defaultValue, className } = this.props;

    return (
      <div className="interactive-item">
        <label htmlFor={name}>{ camelToTitle(name) }:</label>
        <select className="dropdown" 
          value={defaultValue} 
          name={name} 
          id={name} 
          onChange={this.onSelectChange}>
          { this.renderDropdownOptions() }
        </select>
      </div>
    )
  }
}