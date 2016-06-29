import React from 'react';
import { digitStyle } from '../styles';

const Digit = ({ value }) => {

  return <div style={ digitStyle }>{ value }</div>
}

export default Digit;