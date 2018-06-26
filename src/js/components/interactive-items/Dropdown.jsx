import React from 'react';
import { camelToTitle } from '../../helper.js';
import '../../../scss/components/interactive-items/_dropdown.scss';

export default class Dropdown extends React.Component {
  constructor() {
    super();

      // const itemStylesDefault = 'Auto';
  }

  renderDropdownOptions() {
    const { gridItems, alignmentItems, itemGridColumn, defaultValue } = this.props;
    const options = [];
    
    if (gridItems) {
      for (let i = 0; i < gridItems; i++) {
        options.push(<option value={i+1} key={i}>{i+1}</option>)
      }
      return options
    } 
    else if (alignmentItems) {
      alignmentItems.forEach((item, i) => {
        options.push(<option value={item} key={i}>{item}</option>)
      })
      return options
    } 
    else if (itemGridColumn) {
      const defaultLabel = 'Auto';

      for (let i = 0; i < itemGridColumn; i++) {
        options.push(<option value={i+1} key={i}>{i+1}</option>)
      }
      options.unshift(<option value={defaultValue} key={`grid_column_${defaultValue}`}>{defaultLabel}</option>);
      
      return options
    }
  }

  onSelectChange = (e) => {
    this.props.onSelectChange(e);
  }

  render() {
    const { name, defaultValue, className, itemGridColumn } = this.props;

    return (
      <div className="interactiveItem">
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