import React from 'react';
import '../../scss/components/_interactive-container.scss';

import Button from './interactive-items/Button.jsx';
import Input from './interactive-items/Input.jsx';
import Dropdown from './interactive-items/Dropdown.jsx';
import Checkbox from './interactive-items/Checkbox.jsx';

export default class InteractiveContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      alignmentItems: [
        'start',
        'end',
        'center',
        'space-between',
        'space-around'
      ]
    }
  }

  onButtonClick = (e) => {
    this.props.onButtonClick(e);
  }

  onInputChange = (e) => {
    this.props.onInputChange(e);
  }

  onSelectChange = (e) => {
    this.props.onSelectChange(e)
  }

  onCheckboxChange = () => {
    this.props.onCheckboxChange()
  }

  render() {
    const { gridGap, rowHeight, columnWidth, gridItems, columnsPerRow } = this.props;
    const { alignmentItems } = this.state;

    return (
      <div className="interactiveContainer">
        <Button name="addItem" 
          onButtonClick={this.onButtonClick} />
        <Button name="removeItem" 
          onButtonClick={this.onButtonClick} />
        <Input name="gridGap" 
          onInputChange={this.onInputChange} 
          defaultValue={gridGap} />
        <Input name="rowHeight" 
          onInputChange={this.onInputChange}
          defaultValue={rowHeight} />
        <Input name="columnWidth" 
          onInputChange={this.onInputChange}
          defaultValue={columnWidth} />
        <Checkbox name="stretchColumns" 
          onCheckboxChange={this.onCheckboxChange} />
        <Dropdown name="columnsPerRow" 
          gridItems={gridItems} 
          onSelectChange={this.onSelectChange} 
          defaultValue={columnsPerRow} />
        <Dropdown name="justifyContent"
          alignmentItems={alignmentItems} 
          onSelectChange={this.onSelectChange} />
        <Dropdown name="alignContent"
          alignmentItems={alignmentItems} 
          onSelectChange={this.onSelectChange} />
      </div>
    )
  }
}