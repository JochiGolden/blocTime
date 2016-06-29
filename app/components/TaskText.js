import React from 'react';
import { connect } from 'react-redux';
import { taskTextStyle } from '../styles';

const TaskText = ({ text, klass }) => {

  return <div style={ taskTextStyle } className={ klass }>{ text }</div>
}

export default TaskText;
