import React from 'react';
import '../../scss/components/_code-container.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class CodeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isCopied: false
    }

    // this.properties = {
    //   gridGap: (gridGap) => `grid-gap: ${gridGap}px;`
    // }
  }

  renderCSSList() {
    const gridStyles = this.props.gridStyles;

    return (
      <ul>
        <li>.grid-container &#123;</li>
        <li>grid-gap: {gridStyles.gridGap}px;</li>
        <li>grid-auto-rows: {gridStyles.gridAutoRows}px;</li>
        <li>grid-template-columns: {gridStyles.gridTemplateColumns};</li>
        <li>justify-content: {gridStyles.justifyContent};</li>
        <li>align-content: {gridStyles.alignContent};</li>
        <li>&#125;</li>
      </ul>
    )
  }

  stylesToString() {
    const styles = this.props.gridStyles;

    let stringifiedStyles = [
      `grid-gap: ${JSON.stringify(styles.gridGap)}px;`,
      `grid-auto-rows: ${JSON.stringify(styles.gridAutoRows)}px;`,
      `grid-template-columns: ${JSON.stringify(styles.gridTemplateColumns)};`,
      `justify-content: ${JSON.stringify(styles.justifyContent)};`,
      `align-content: ${JSON.stringify(styles.alignContent)};`,
    ]

    let string = JSON.stringify(stringifiedStyles);

    const replacedString = string
      .replace(/\[|]|\\|"/g, '') // remove \, [, ], "
      .replace(/;,/g, ';\n') // add line break after each property

    return replacedString;
  }

  onCopy = () => {
    this.setState({isCopied: true})
    this.stylesToString();
  }

  render() {
    return (
      <div className="CodeContainer">
        { this.renderCSSList() }
        <CopyToClipboard text={this.stylesToString()} 
          onCopy={this.onCopy}>
          <button className="button-copy">
            <span className="display2">copy CSS</span>
          </button>
        </CopyToClipboard>
      </div>
    )
  }
}