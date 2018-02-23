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
    return (
      <div className="gridContainer">
        { this.renderGridItems() }
      </div>
    )
  }
}