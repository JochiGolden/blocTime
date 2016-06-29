import React from 'react';
import { connect } from 'react-redux';
import { currentTaskStyle, underline } from '../styles';

import TaskTitle from '../components/TaskTitle';
import TaskText from '../components/TaskText';
import MarkContainer from './MarkContainer';

const CurrentTaskContainer = ({ currentTask }) => {
  
  const { title, text, pomodoros } = currentTask;
  
  return (
      <div style={ currentTaskStyle }>
        <div className="row">

          <TaskTitle title={ title } klass={ "col-md-8" } />
          <MarkContainer pomodoros={ pomodoros } klass={ "col-md-4" } />

        </div>
        <div className="row">
        
          <div className="col-md-12" style={ underline } />
        
        </div>
        <div className="row">

          <TaskText text={ text } klass={ "col-md-12" }/>

        </div>
      </div>
  );
}

function mapStateToProps(state) {
  return {
    currentTask : state.currentTask
  };
}

export default connect(mapStateToProps)(CurrentTaskContainer);
