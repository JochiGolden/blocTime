import React from 'react';
import Radium from 'radium';
import { iconStyle } from '../styles';

let Icon = ({ symbol }) => {

  return <span style={[ iconStyle ]} className={ `glyphicon glyphicon-${symbol}` } />

}

export default Radium(Icon);
