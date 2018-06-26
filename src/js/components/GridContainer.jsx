import React from 'react';
import '../../scss/components/_grid-container.scss';
import GridItem from './GridItem.jsx';

export default class GridContainer extends React.Component {
  onGridItemClick = (e) => {
    // console.log(props)
    this.props.onGridItemClick(e);
  }

  renderGridItems() {
    const { gridItems } = this.props;
    const items = [];

    for (let i = 0; i < gridItems; i++) {
      items.push(<GridItem key={i} itemNumber={i+1} onGridItemClick={this.onGridItemClick} />)
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