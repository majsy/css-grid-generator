import React from 'react';
// import '../../scss/components/_button-amount.scss';

export default class Dropdown extends React.Component {
  // todo add placeholder for default styles

  renderDropdownOptions() {
    const items = this.props.gridItems || this.props.alignment;
    const options = [];
    
    if (this.props.gridItems) {
      for (let i = 0; i < items; i++) {
        options.push(<option value={i+1} key={i}>{i+1}</option>)
      }
      return options
    } 
    else if (this.props.alignment) {
      items.forEach((item, i) => {
        options.push(<option value={item} key={i}>{item}</option>)
      })
      return options
    }
  }

  handleSelect = (e) => {
    this.props.handleSelect(e);
  }

  render() {
    const items = this.props.gridItems || this.props.alignment;

    return (
      <div>
        <label htmlFor="dropdownSelect">{this.props.name}:</label>
        <select className="dropdown" value={this.props.defaultValue} name={this.props.name} id="dropdownSelect" onChange={this.handleSelect}>
          { this.renderDropdownOptions() }
        </select>
      </div>
    )
  }
}