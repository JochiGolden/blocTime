import React from 'react';
import Radium from 'radium';
import { digitStyle } from '../styles';

const Digit = ({ value }) => {

  return <div style={[ digitStyle ]}>{ value }</div>
}

export default Radium(Digit);
