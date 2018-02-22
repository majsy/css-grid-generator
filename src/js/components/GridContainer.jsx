import React from 'react';
// import '../scss/main.scss';
import GridItem from './GridItem.jsx';

export default class GridContainer extends React.Component {
  render() {
    return (
      <div>
        <p>Container</p>
        <GridItem />
      </div>
    )
  }
}