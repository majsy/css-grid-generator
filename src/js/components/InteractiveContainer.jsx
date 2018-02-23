import React from 'react';
import '../../scss/components/_interactive-container.scss';
import ButtonAdd from './ButtonAdd.jsx';
import ButtonRemove from './ButtonRemove.jsx';

export default class InteractiveContainer extends React.Component {
  handleClickAdd = () => {
    this.props.handleClickAdd();
  }

  handleClickRemove = () => {
    this.props.handleClickRemove();
  }

  // todo: select how many columns/per
  
  render() {
    return (
      <div className="interactiveContainer">
        interactive container
        <ButtonAdd handleClickAdd={this.handleClickAdd} />
        <ButtonRemove handleClickRemove={this.handleClickRemove} />
      </div>
    )
  }
}