import React from "react";
import Radium from 'radium';
import { completionMarkStyle } from '../styles';

const CompletionMark = () => {

  return <div style={[ completionMarkStyle ]} className="glyphicon glyphicon-ok" />
}

export default Radium(CompletionMark);
