import React from 'react';
import '../../scss/components/_grid-container.scss';
import GridItem from './GridItem.jsx';

export default class GridContainer extends React.Component {
  renderGridItems() {
    const gridItems = this.props.gridItems;
    const items = [];

    for (let i = 0; i < gridItems; i++) {
      items.push(<GridItem key={i} number={i+1} />)
    }
    return items
  }

  render() {
    return (
      <div className="gridContainer" style={this.props.gridStyles}>
        { this.renderGridItems() }
      </div>
    )
  }
} 