import React from 'react';
import '../../scss/components/_interactive-container.scss';

import ButtonAdd from './interactive-items/ButtonAdd.jsx';
import ButtonRemove from './interactive-items/ButtonRemove.jsx';
import Input from './interactive-items/Input.jsx';
import Dropdown from './interactive-items/Dropdown.jsx';
import Checkbox from './interactive-items/Checkbox.jsx';

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
      <div className="interactive-container">
        <ButtonAdd handleClickAdd={this.handleClickAdd} />
        <ButtonRemove handleClickRemove={this.handleClickRemove} />
        <Input name="gridGap" 
          label="Grid Gap"
          handleInput={this.handleInput} 
          defaultValue={this.props.gridGap}
          className="input" />
        <Input name="rowHeight"
          label="Row Height" 
          handleInput={this.handleInput}
          defaultValue={this.props.rowHeight}
          className="input" />
        <Input name="columnWidth" 
          label="Column Width"
          handleInput={this.handleInput}
          defaultValue={this.props.columnWidth}
          className="input" />
        <Checkbox handleCheckboxInput={this.props.handleCheckboxInput} />
        <Dropdown name="columnsPerRow" 
          label="Columns per Row"
          gridItems={this.props.gridItems} 
          handleSelect={this.handleSelect} 
          defaultValue={this.props.columnsPerRow} />
        <Dropdown name="justifyContent"
          label="Justify Content" 
          alignment={this.state.alignment} 
          handleSelect={this.handleSelect} />
        <Dropdown name="alignContent"
          label="Align Content" 
          alignment={this.state.alignment} 
          handleSelect={this.handleSelect} />
      </div>
    )
  }
}