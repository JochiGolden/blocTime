import React from 'react';
import Radium from 'radium';
import { taskTitleStyle } from '../styles';

const TaskTitle = ({ title, klass, current }) => {

  return <div style={[ taskTitleStyle ]} className={ klass }>{ title }</div>
}

export default Radium(TaskTitle);
