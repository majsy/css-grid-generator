import React from 'react';
// import '../scss/main.scss';
import InteractiveContainer from './InteractiveContainer.jsx';
import GridContainer from './GridContainer.jsx';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gridItems: 3
    }
  }

  handleClickAdd = () => {
    this.setState({gridItems: this.state.gridItems + 1})
  }

  handleClickRemove = () => {
    this.setState({gridItems: this.state.gridItems - 1})
  }

  render() {
    return (
      <div>
        <InteractiveContainer handleClickAdd={this.handleClickAdd}
          handleClickRemove={this.handleClickRemove} />
        <GridContainer gridItems={this.state.gridItems} />
      </div>
    )
  }
}