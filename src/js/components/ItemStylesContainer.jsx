import React from 'react';
import '../../scss/components/_interactive-container.scss';

import Input from './interactive-items/Input.jsx';
import Dropdown from './interactive-items/Dropdown.jsx';

export default class ItemStylesContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      currentItem: 1,
      stylesItem1: {
        gridColumn: 1,
        gridRow: 1
      }
    }
  }

  render() {
    const { gridGap, rowHeight, columnWidth, gridItems, columnsPerRow } = this.props;
    const { alignmentItems } = this.state;

    return (
      <div className="itemStylesContainer">
        <h2 className="display1 styleContainerTitle">Item Styles</h2>
        <Dropdown name="columnsPerRow" 
          gridItems={gridItems} 
          onSelectChange={this.onSelectChange} 
          defaultValue={columnsPerRow} />
        <Input name="columnWidth" 
          onInputChange={this.onInputChange}
          defaultValue={columnWidth} />
      </div>
    )
  }
}