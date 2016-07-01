import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { currentTaskStyle, currentTitleStyle } from '../styles';

import TaskTitle from '../components/TaskTitle';
import MarkContainer from './MarkContainer';
import Underline from '../components/Underline';
import Subtask from '../components/SubTask';

let CurrentTaskContainer = ({ currentTask }) => {
  
  const { title, text, pomodoros, subtasks } = currentTask;
  
  return (
      <div style={[ currentTaskStyle ]}>
        <div className="row">

          <h1 className="col-md-7 col-md-offset-1" style={[ currentTitleStyle ]}>{ title }</h1>
          <MarkContainer currentMarks={ true } pomodoros={ pomodoros } klass={ "col-md-4" } />

        </div>
        <div className="row">
        
          <Underline />
        
        </div>
        <div className="row">

          { subtasks.map((subtext, index) => {
            return <Subtask key={ `subtext-${index}` } text={ subtext } />
          })}

        </div>
      </div>
  );
}

function mapStateToProps(state) {
  return {
    currentTask : state.tasks.list[state.tasks.currentTask]
  };
}

CurrentTaskContainer = Radium(CurrentTaskContainer);

export default connect(mapStateToProps)(CurrentTaskContainer);
