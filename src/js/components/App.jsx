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
      rowHeight: 120
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

  render() {
    return (
      <div>
        <InteractiveContainer handleClickAdd={this.handleClickAdd}
          handleClickRemove={this.handleClickRemove}
          handleInput={this.handleInput}
          gridGapMax={this.state.gridGapMax} />
        <GridContainer gridItems={this.state.gridItems} 
          gridGap={this.state.gridGap}
          rowHeight={this.state.rowHeight} />
      </div>
    )
  }
}