import React from 'react';
import '../../scss/components/_interactive-container.scss';

import GridStylesContainer from './GridStylesContainer.jsx';
// import ItemStylesContainer from './ItemStylesContainer.jsx';

export default class InteractiveContainer extends React.Component {
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
    const { gridGap, rowHeight, columnWidth, gridItems, columnsPerRow, currentGridItem } = this.props;

    return (
      <div className="interactiveContainer">
        <GridStylesContainer 
          onButtonClick={this.onButtonClick}
          onInputChange={this.onInputChange}
          onSelectChange={this.onSelectChange}
          onCheckboxChange={this.onCheckboxChange}
          gridGap={gridGap}
          rowHeight={rowHeight}
          gridItems={gridItems}
          columnsPerRow={columnsPerRow}
          columnWidth={columnWidth} />
        {/* <ItemStylesContainer 
          currentGridItem={currentGridItem}
          columnsPerRow={columnsPerRow}
          onSelectChange={this.onSelectChange} /> */}
      </div>
    )
  }
}