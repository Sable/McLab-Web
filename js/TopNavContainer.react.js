import classnames from 'classnames';
import OpenFileStore from './stores/OpenFileStore';
import {Container} from 'flux/utils';
import TopNav from './TopNav.react';
var React = require('react');

class TopNavContainer extends React.Component {
  static getStores() {
    return [
      OpenFileStore,
    ];
  }

  static calculateState(prevState) {
    return {
      filePath: OpenFileStore.getFilePath(),
    };
  }

  render() {
    return <TopNav />
  }
}

export default Container.create(TopNavContainer);
