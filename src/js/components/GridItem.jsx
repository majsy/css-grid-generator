import React from 'react';
import '../../scss/components/_grid-item.scss';

export default class GridItem extends React.Component {
  render() {
    return <div className="gridItem">
      <p className="display2 item-number">{this.props.number}</p>
    </div>
  }
}