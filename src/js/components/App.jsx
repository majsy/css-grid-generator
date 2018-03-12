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
      colIsStretched: false
    }
  }

  handleClickAdd = () => {
    this.setState({gridItems: this.state.gridItems + 1})
  }

  handleClickRemove = () => {
    this.setState({gridItems: this.state.gridItems - 1})
  }

  handleInput = (e) => {
    let input = e.target;
    this.setState({[input.name]: Number(input.value)})
  }

  handleSelect = (e) => {
    let select = e.target;
    this.setState({[select.name]: select.value})
  }

  handleCheckboxInput = () => {
    this.setState({colIsStretched: !this.state.colIsStretched})
  }

  renderColumnWidth() {
    const isStretched = this.state.colIsStretched;
    const columnsPerRow = this.state.columnsPerRow;
    const columnWidth = this.state.columnWidth;

    if (isStretched) {
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

    return (
      <div>
        <Header />
        <div className="upper-container">
          <InteractiveContainer handleClickAdd={this.handleClickAdd}
            handleClickRemove={this.handleClickRemove}
            handleInput={this.handleInput}
            gridGap={this.state.gridGap}
            rowHeight={this.state.rowHeight}
            gridItems={this.state.gridItems}
            handleSelect={this.handleSelect}
            handleCheckboxInput={this.handleCheckboxInput}
            columnsPerRow={this.state.columnsPerRow}
            columnWidth={this.state.columnWidth} />
          <CodeContainer gridStyles={gridStyles} />
        </div>
        <GridContainer gridStyles={gridStyles}
          gridItems={this.state.gridItems} />
      </div>
    )
  }
}