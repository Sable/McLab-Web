import TerminalBufferStore from './stores/TerminalBufferStore';
import {Container} from 'flux/utils';
import Terminal from './Terminal.react';
var React = require('react');

class TerminalContainer extends React.Component {
  static getStores() {
    return [
      TerminalBufferStore,
    ];
  }

  static calculateState(prevState) {
    return {
      buffer: TerminalBufferStore.getBuffer(),
    };
  }

  render() {
    return (
      <Terminal buffer={this.state.buffer} />
    );
  }
}

export default Container.create(TerminalContainer);
