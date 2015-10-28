import React from 'react';
import {DropdownButton} from 'react-bootstrap';


const {PropTypes, Component} = React;

const DropdownSelect = (props) => (
  <DropdownButton
    bsStyle={props.bsStyle}
    title={props.value || "Select..."}
    >
    {props.children}
  </DropdownButton>
);

DropdownSelect.propTypes = {
  value: PropTypes.string,
  bsStyle: PropTypes.string,
}

module.exports = DropdownSelect;
