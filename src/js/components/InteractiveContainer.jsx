import React from 'react';
import '../../scss/components/_interactive-container.scss';
import ButtonAdd from './ButtonAdd.jsx';
import ButtonRemove from './ButtonRemove.jsx';
import Input from './Input.jsx';
import Dropdown from './Dropdown.jsx';
import Checkbox from './Checkbox.jsx';

export default class InteractiveContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      alignment: [
        'start',
        'end',
        'center',
        'space-between',
        'space-around'
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

  handleCheckboxInput = () => {
    this.props.handleCheckboxInput()
  }

  render() {
    return (
      <div className="interactiveContainer">
        <ButtonAdd handleClickAdd={this.handleClickAdd} />
        <ButtonRemove handleClickRemove={this.handleClickRemove} />
        <Input name="gridGap" 
          handleInput={this.handleInput} 
          defaultValue={this.props.gridGap} />
        <Input name="rowHeight" 
          handleInput={this.handleInput}
          defaultValue={this.props.rowHeight} />
        <Input name="columnWidth" 
          handleInput={this.handleInput}
          defaultValue={this.props.columnWidth} />
        <Checkbox handleCheckboxInput={this.props.handleCheckboxInput} />
        <Dropdown name="columnsPerRow" 
          gridItems={this.props.gridItems} 
          handleSelect={this.handleSelect} 
          defaultValue={this.props.columnsPerRow} />
        <Dropdown name="justifyContent" 
          alignment={this.state.alignment} 
          handleSelect={this.handleSelect} />
        <Dropdown name="alignContent" 
          alignment={this.state.alignment} 
          handleSelect={this.handleSelect} />
      </div>
    )
  }
}