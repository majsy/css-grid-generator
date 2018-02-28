import React from 'react';
// import '../scss/main.scss';
import InteractiveContainer from './InteractiveContainer.jsx';
import GridContainer from './GridContainer.jsx';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gridItems: 3,
      gridGap: 10,
      gridGapMax: 100,
      rowHeight: 120,
      columnsPerRow: 3,
      justifyContent: 'start',
      alignContent: 'start'
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

  render() {
    return (
      <div>
        <InteractiveContainer handleClickAdd={this.handleClickAdd}
          handleClickRemove={this.handleClickRemove}
          handleInput={this.handleInput}
          gridGapMax={this.state.gridGapMax}
          gridItems={this.state.gridItems}
          handleSelect={this.handleSelect} />
        <GridContainer gridItems={this.state.gridItems} 
          gridGap={this.state.gridGap}
          rowHeight={this.state.rowHeight}
          columnsPerRow={this.state.columnsPerRow}
          justifyContent={this.state.justifyContent}
          alignContent={this.state.alignContent} />
      </div>
    )
  }
}