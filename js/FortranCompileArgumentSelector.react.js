import AT from './constants/AT';
import MatlabArgTypes from './constants/MatlabArgTypes';
import React from 'react';
import Dispatcher from './Dispatcher';
import DropdownSelect from './DropdownSelect.react';

import { DropdownButton, MenuItem } from 'react-bootstrap';

const { PropTypes, Component } = React;


const FortranCompileArgumentSelector = (props) => {

  const getCurrentArg = () => ({
    mlClass: props.className,
    numRows: props.numRows,
    numCols: props.numCols,
    realComplex: props.realComplex,
  });

  const onSelectGen = (typeAttrName, newTypeAttr) => {
    let arg = getCurrentArg();
    arg[typeAttrName] = newTypeAttr;

    return () => (
      Dispatcher.dispatch({
        action: AT.FORTRAN_COMPILE_PANEL.EDIT_ARGUMENT,
        data: { arg: arg },
      })
    );
  };

  let classes = [];
  for (let prop in MatlabArgTypes.MatlabClass) {
    if (MatlabArgTypes.MatlabClass.hasOwnProperty(prop)) {
      classes.push(MatlabArgTypes.MatlabClass[prop]);
    }
  }

  let realcomplexattrs = [];
  for (let prop in MatlabArgTypes.MatlabRealComplex) {
    if (MatlabArgTypes.MatlabRealComplex.hasOwnProperty(prop)) {
      realcomplexattrs.push(MatlabArgTypes.MatlabRealComplex[prop]);
    }
  }

  let classMenuItems = [];
  let menuCount = 1;
  for (let kls of classes) {
    classMenuItems.push(
      <MenuItem
        eventKey={'' + menuCount}
        key={'ClassMenu-' + menuCount}
        onSelect={onSelectGen('mlClass', kls)}
        >
        {kls.display}
      </MenuItem>
    );

    menuCount += 1;
  }

  let rcMenuItems = [];
  let rcCount = 1;
  for (let attr of realcomplexattrs) {
    rcMenuItems.push(
      <MenuItem
        eventKey={'' + rcCount}
        key={'RCMenu-' + rcCount}
        onSelect={onSelectGen('realComplex', attr)}
        >
        {attr.display}
      </MenuItem>
    );
    rcCount += 1;
  }

  return (
    <div className="argument-type-container">
      <DropdownSelect value={props.mlClass.display}>
        {classMenuItems}
      </DropdownSelect>

      <DropdownButton
        title="Class"
        >
      </DropdownButton>

      <DropdownSelect value={props.realComplex.display}>
        {rcMenuItems}
      </DropdownSelect>
    </div>
  );
};

FortranCompileArgumentSelector.propTypes = {
  mlClass: PropTypes.object,
  numRows: PropTypes.number,
  numCols: PropTypes.number,
  realComplex: PropTypes.object,
};

FortranCompileArgumentSelector.defaultProps = {
  mlClass: MatlabArgTypes.MatlabClass.DOUBLE,
  numRows: 1,
  numCols: 1,
  realComplex: MatlabArgTypes.MatlabRealComplex.REAL,
};

module.exports = FortranCompileArgumentSelector;
