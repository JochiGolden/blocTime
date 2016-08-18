import React from 'react';
import { connect } from 'react-redux';

import MarkContainer from './MarkContainer.jsx';
import Subtask from '../sub_components/SubTask.jsx';

class CurrentTaskContainer extends React.Component {
  
  render() {
    
    if (this.props.currentTask) {
      let { title, text, subtasks } = this.props.currentTask;
      
      return (
        <div className="row">
          <div className="col">
            <h3 className="heading">Current Task</h3>

            <h1 className="current-task-title">{ title }</h1>
            <MarkContainer id={ this.props.id } />

            <div className="current-subtasks col">
              { subtasks.map((subtext, index) => {
                return <Subtask key={ `subtext-${index}` } text={ subtext } />
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="current-task row">
          <div className="col">
            <h1 className="current-task-title">&lt;Add A Task&gt;</h1>
          </div>
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

export default connect(mapStateToProps)(CurrentTaskContainer);
