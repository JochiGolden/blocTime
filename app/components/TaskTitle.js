import React from 'react';
import Radium from 'radium';
import { taskTitleStyle } from '../styles';

const TaskTitle = ({ title, clickHandler }) => {

  return <h3 onClick={ clickHandler } style={[ taskTitleStyle ]}>{ title }</h3>

}

export default Radium(TaskTitle);
