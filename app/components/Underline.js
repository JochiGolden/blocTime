import React from 'react';
import Radium from 'radium';
import { underlineStyle } from '../styles';

const Underline = ({ value }) => {

  return <div style={[ underlineStyle ]} className="row" />
}

export default Radium(Underline);
