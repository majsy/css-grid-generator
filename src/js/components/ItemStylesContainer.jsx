import React from 'react';
import '../../scss/components/_interactive-container.scss';

import Input from './interactive-items/Input.jsx';
import Dropdown from './interactive-items/Dropdown.jsx';

export default class ItemStylesContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      
    }
  }
  
  onSelectChange = (e) => {
    this.props.onSelectChange(e)
  }

  render() {
    const { columnsPerRow, currentGridItem } = this.props;
    const itemDefault = undefined;

    return (
      <div className="itemStylesContainer">
        <h2 className="display1 styleContainerTitle">Item {currentGridItem} Styles</h2>
        <Dropdown name="gridColumn" 
          itemGridColumn={columnsPerRow} 
          onSelectChange={this.onSelectChange} 
          defaultValue={itemDefault} />
        <Input name="gridRow" 
          onInputChange={this.onInputChange}
          defaultValue={itemDefault} />
      </div>
    )
  }
}