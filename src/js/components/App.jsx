import React from 'react';
// import '../scss/main.scss';
import InteractiveContainer from './InteractiveContainer.jsx';
import GridContainer from './GridContainer.jsx';
import CodeContainer from './CodeContainer.jsx';
import Header from './Header.jsx';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gridItems: 3,
      gridGap: 10,
      rowHeight: 120,
      columnWidth: 150,
      columnsPerRow: 3,
      justifyContent: 'start',
      alignContent: 'start',
      colIsStretched: false,
      currentGridItem: 1
    }
  }

  onButtonClick = (e) => {
    let button = e.target;
    if (button.name === 'addItem') {
      this.setState({gridItems: this.state.gridItems + 1})
    } else {
      this.setState({gridItems: this.state.gridItems - 1})
    }
  }

  onInputChange = (e) => {
    let input = e.target;
    this.setState({[input.name]: Number(input.value)})
  }

  onSelectChange = (e) => {
    let select = e.target;
    this.setState({[select.name]: select.value})
  }

  onCheckboxChange = () => {
    this.setState({colIsStretched: !this.state.colIsStretched})
  }

  renderColumnWidth() {
    const { colIsStretched, columnsPerRow, columnWidth } = this.state;

    if (colIsStretched) {
      return `repeat(${columnsPerRow}, minmax(auto, 1fr))`
    } else {
      return `repeat(${columnsPerRow}, minmax(auto, ${columnWidth}px))`
    }
  }

  render() {
    const gridStyles = {
      gridGap: this.state.gridGap,
      gridAutoRows: this.state.rowHeight,
      gridTemplateColumns: this.renderColumnWidth(),
      justifyContent: this.state.justifyContent,
      alignContent: this.state.alignContent
    }

    const itemStyles = [
      
    ]

    

    const { gridGap, rowHeight, gridItems, columnsPerRow, columnWidth, currentGridItem } = this.state;

    return (
      <div>
        <Header />
        <div className="upper-container">
          <InteractiveContainer onButtonClick={this.onButtonClick}
            onInputChange={this.onInputChange}
            onSelectChange={this.onSelectChange}
            onCheckboxChange={this.onCheckboxChange}
            gridGap={gridGap}
            rowHeight={rowHeight}
            gridItems={gridItems}
            columnsPerRow={columnsPerRow}
            columnWidth={columnWidth}
            currentGridItem={currentGridItem} />
          <CodeContainer gridStyles={gridStyles} />
        </div>
        <GridContainer gridStyles={gridStyles}
          gridItems={gridItems} />
      </div>
    )
  }
}