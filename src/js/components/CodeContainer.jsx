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
    const styles = this.props.gridStyles;

    return (
      <ul>
        <li>.grid-container &#123;</li>
        <li>grid-gap: {styles.gridGap}px;</li>
        <li>grid-auto-rows: {styles.gridAutoRows}px;</li>
        <li>grid-template-columns: {styles.gridTemplateColumns};</li>
        <li>justify-content: {styles.justifyContent};</li>
        <li>align-content: {styles.alignContent};</li>
        <li>&#125;</li>
      </ul>
    )
  }

  getCSSListText() {
    const styles = this.props.gridStyles;
 
    const stylesToText = JSON.stringify(styles);

    const replaced = stylesToText.replace(/,/g, ';\n');

    console.log(replaced)

    return replaced
  }

  onCopy = () => {
    this.setState({isCopied: true})
    console.log(this.state.isCopied)
  }

  render() {
    return (
      <div className="CodeContainer">
        { this.renderCSSList() }
        <CopyToClipboard text={this.getCSSListText()}
          onCopy={this.onCopy}>
          <button>copy CSS</button>
        </CopyToClipboard>
      </div>
    )
  }
}