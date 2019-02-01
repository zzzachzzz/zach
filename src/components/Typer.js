import React, { Component } from 'react';
import Statement from './Statement';

class Typer extends Component {
  state = {
    inputLines: [
      'python3', '2nd input', '8 * 8'
    ],
    returnLines: [
      'you are now in python :D', '2nd return', '64'
    ],
    currentInputLines: [],
    currentReturnLines: [],
    currentStatementIndex: 0,
    typingSpeed: 100
  }

  componentDidMount() {
    this.handleTyping();
  }

  handleTyping = async () => {
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const { inputLines, returnLines, currentInputLines, currentReturnLines, typingSpeed } = this.state;
    for (let i = 0; i < inputLines.length; i++) {
      await sleep(1500);  // Wait between rendered statements
      for (let j = 0; j < inputLines[i].length; j++) {
        if (this.state.currentInputLines[i] === undefined) {
          currentInputLines[i] = '';
        }
        currentInputLines[i] += inputLines[i][j];  // Type next character
        this.setState({ currentInputLines: currentInputLines });
        await sleep(typingSpeed);
      }
      await sleep(200);
      currentReturnLines[i] = returnLines[i];
      this.setState({ currentReturnLines: currentReturnLines, currentStatementIndex: i+1 });
    }
  }

  render() {
    const { currentInputLines, currentReturnLines, currentStatementIndex } = this.state;
    return (
      <div>
        <Statement inputStatement={currentInputLines[0] || ''}
                   returnStatement={currentReturnLines[0] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 0)}
                   statementReached={Boolean(currentStatementIndex >= 0)}
                   statementPrefix={linuxPrefix} />
        <Statement inputStatement={currentInputLines[1] || ''}
                   returnStatement={currentReturnLines[1] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 1)}
                   statementReached={Boolean(currentStatementIndex >= 1)} />
        <Statement inputStatement={currentInputLines[2] || ''}
                   returnStatement={currentReturnLines[2] || ''}
                   showCursorHere={Boolean(currentStatementIndex === 2)}
                   statementReached={Boolean(currentStatementIndex >= 2)} />
      </div>
    );
  }
}

const linuxPrefix = (
  <React.Fragment>
    <span style={{color: 'mediumspringgreen'}}>zach@penguin</span>:<span style={{color: 'cyan'}}>~</span>$&nbsp;
  </React.Fragment>
);

export default Typer;