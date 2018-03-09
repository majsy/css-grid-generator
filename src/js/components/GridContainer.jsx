import React from 'react';
import '../../scss/components/_grid-container.scss';
import GridItem from './GridItem.jsx';

export default class GridContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      colWidthIsUpdated: false,
      itemsAreStretched: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.columnWidth !== nextProps.columnWidth) {
      this.setState({colWidthIsUpdated: true})
    }
  }

  renderGridItems() {
    const gridItems = this.props.gridItems;
    const items = [];

    for (let i = 0; i < gridItems; i++) {
      items.push(<GridItem key={i} />)
    }
    return items
  }

  renderColumnWidth() {
    const columnWidth = this.props.columnWidth;
    const columnsPerRow = this.props.columnsPerRow;

    if (this.state.colWidthIsUpdated) {
      return `repeat(${columnsPerRow}, ${columnWidth}px)`
    } else {
      return `repeat(${columnsPerRow}, 1fr)`
    }

    // todo - add option of stretching items: repeat(x, minmax(width, 1fr))
    // todo - if columsPerRow is wider than container width, change columnsPerRow to fit in container
  }

  renderColPerRow() {
    
  }

  render() {
    // this.renderColPerRow()
    const gridStyles = {
      gridGap: this.props.gridGap,
      gridAutoRows: this.props.rowHeight,
      gridTemplateColumns: this.renderColumnWidth(),
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