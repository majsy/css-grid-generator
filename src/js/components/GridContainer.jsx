import React from 'react';
import '../../scss/components/_grid-container.scss';
import GridItem from './GridItem.jsx';

export default class GridContainer extends React.Component {
  renderGridItems() {
    const gridItems = this.props.gridItems;
    const items = [];

    for (let i = 0; i < gridItems; i++) {
      items.push(<GridItem key={i} />)
    }
    return items
  }

  render() {
    const gridStyles = {
      gridGap: this.props.gridGap,
      gridAutoRows: this.props.rowHeight,
      gridTemplateColumns: `repeat(${this.props.columnsPerRow}, 1fr)`,
      justifyContent: this.props.justifyContent,
      alignContent: this.props.alignContent
    }

    return (
      <div className="gridContainer" style={gridStyles}>
        { this.renderGridItems() }
      </div>
    )
  }
}