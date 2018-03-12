import React from 'react';
import '../../scss/components/_grid-container.scss';
import GridItem from './GridItem.jsx';

export default class GridContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      colWidthIsUpdated: false
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
      return `repeat(${columnsPerRow}, minmax(auto, ${columnWidth}px))`
    } else {
      return `repeat(${columnsPerRow}, minmax(auto, 1fr))`
    }

    // todo - if columWidth x columsPerRow is wider than container width, change columnWidth to fit in container
  }

  render() {
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