import React from 'react';
import '../../scss/components/_grid-item.scss';

export default class GridItem extends React.Component {
  onGridItemClick = (e) => {
    // const { itemNumber } = this.props;
    // console.log(itemNumber)
    this.props.onGridItemClick(e);
  }

  render() {
    const { itemNumber } = this.props;

    return <div className="gridItem" onClick={this.onGridItemClick}>
      <p className="display2 item-number">{itemNumber}</p>
    </div>
  }
}