import AT from './constants/AT';
import classnames from 'classnames';
import Dispatcher from './Dispatcher';
import KindAnalysisActions from './actions/KindAnalysisActions';
import TopNavButtonActions from './actions/TopNavButtonsActions';
import React from 'react';

const {PropTypes, Component} = React;

const fortranOnClick = function() {
  Dispatcher.dispatch({
    action: AT.FORTRAN_COMPILE_PANEL.OPEN_PANEL,
  });
}

class TopNav extends Component {
  render() {
    return (
      <div className="topnav">
        <div className="ml-logo-container">
          <img src="/static/mclab_logo_360.png" className="ml-logo" />
          <div className="mclab-logo-text">MCLAB <strong>WEB</strong></div>
        </  div>
        <div className="buttons-container">
          <a className="pure-button topnav-button"
            href="/">
            New Session
          </a>
          <a className="pure-button topnav-button"
            onClick={fortranOnClick}>
            Compile to Fortran
          </a>
          <a className="pure-button topnav-button"
            onClick={KindAnalysisActions.runKindAnalysis}>
            Kind Analysis
          </a>
          <a className="pure-button topnav-button"
            onClick={TopNavButtonActions.printShortenedLink}>
            Get Short Link
          </a>
        </div>
      </div>
    );
  }

  componentDidMount(){
    TopNavButtonActions.getShortenedLink();
  }

}

TopNav.propTypes = {

}

export default TopNav;
