import React from 'react';
import '../../scss/components/_interactive-container.scss';

import Input from './interactive-items/Input.jsx';
import Dropdown from './interactive-items/Dropdown.jsx';

export default class ItemStylesContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      stylesItem1: {
        gridColumn: 1,
        gridRow: 1
      }
    }
  }
  
  onSelectChange = (e) => {
    console.log('hello')
    this.props.onSelectChange(e)
  }

  render() {
    const { columnsPerRow, currentGridItem } = this.props;

    return (
      <div className="itemStylesContainer">
        <h2 className="display1 styleContainerTitle">Item {currentGridItem} Styles</h2>
        <Dropdown name="gridColumn" 
          itemGridColumn={columnsPerRow} 
          onSelectChange={this.onSelectChange} 
          defaultValue="auto" />
        <Input name="gridRow" 
          onInputChange={this.onInputChange}
          defaultValue={currentGridItem} />
      </div>
    )
  }
}