import React from 'react';
// import '../../scss/components/_button-amount.scss';

export default class Dropdown extends React.Component {
  renderDropdownOptions() {
    const gridItems = this.props.gridItems;
    const options = [];

    for (let i = 0; i < gridItems; i++) {
      options.push(<option value={i+1} key={i}>{i+1}</option>)
    }
    return options
  }

  handleSelect = (e) => {
    this.props.handleSelect(e);
  }

  render() {
    return (
      <div>
        <label htmlFor="dropdownSelect">Columns per Row</label>
        <select className="dropdown" name="columnsPerRow" id="dropdownSelect" onChange={this.handleSelect}>
          { this.renderDropdownOptions() }
        </select>
      </div>
    )
  }
}