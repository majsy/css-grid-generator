import React from 'react';
import '../../scss/components/_interactive-container.scss';
import ButtonAdd from './ButtonAdd.jsx';
import ButtonRemove from './ButtonRemove.jsx';
import Input from './Input.jsx';
import Dropdown from './Dropdown.jsx';

export default class InteractiveContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      justifyItems: [
        'start',
        'end',
        'center'
      ]
    }
  }

  handleClickAdd = () => {
    this.props.handleClickAdd();
  }

  handleClickRemove = () => {
    this.props.handleClickRemove();
  }

  handleInput = (e) => {
    this.props.handleInput(e);
  }

  handleSelect = (e) => {
    this.props.handleSelect(e)
  }

  // todo: select how many columns/per

  render() {
    return (
      <div className="interactiveContainer">
        <ButtonAdd handleClickAdd={this.handleClickAdd} />
        <ButtonRemove handleClickRemove={this.handleClickRemove} />
        <Input name="gridGap" handleInput={this.handleInput} label="Grid Gap" max={this.props.gridGapMax} />
        <Input name="rowHeight" handleInput={this.handleInput} label="Row Height" />
        <Input label="Column width" />
        <Dropdown gridItems={this.props.gridItems} handleSelect={this.handleSelect} />
        <Dropdown justifyItems={this.state.justifyItems} handleSelect={this.handleSelect} />
      </div>
    )
  }
}