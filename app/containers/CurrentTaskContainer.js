import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { currentTaskStyle, currentTitleStyle } from '../styles';

import TaskTitle from '../components/TaskTitle';
import MarkContainer from './MarkContainer';
import Underline from '../components/Underline';
import Subtask from '../components/SubTask';

class CurrentTaskContainer extends React.Component {
  
  render() {
    
    if (this.props.currentTask) {
      let { title, text, subtasks } = this.props.currentTask;
      
      return (
        <div style={[ currentTaskStyle ]}>
          <div className="row">

            <h1 style={[ currentTitleStyle ]}>{ title }</h1>
            <MarkContainer id={ this.props.id } />

          </div>

            <Underline />

          <div className="row">

            { subtasks.map((subtext, index) => {
              return <Subtask key={ `subtext-${index}` } text={ subtext } />
            })}

          </div>
        </div>
      );
    } else {
      return (
        <div style={[ currentTaskStyle ]}>
          <div className="row">
            <h1 style={[ currentTitleStyle ]}>&lt;Blank&gt;</h1>
          </div>
          <Underline />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    currentTask : state.tasks.list[state.tasks.currentTask],
    id : state.tasks.currentTask
  };
}

CurrentTaskContainer = Radium(CurrentTaskContainer);

export default connect(mapStateToProps)(CurrentTaskContainer);
