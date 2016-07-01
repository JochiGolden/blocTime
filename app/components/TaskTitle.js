import React from 'react';
import Radium from 'radium';
import { taskTitleStyle } from '../styles';

const TaskTitle = ({ title }) => {

  return <h3 style={[ taskTitleStyle ]}>{ title }</h3>

}

export default Radium(TaskTitle);
