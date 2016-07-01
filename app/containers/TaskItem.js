import React from "react";
import Radium from 'radium';
import { connect } from 'react-redux';
import { changeCurrentTask } from '../actionCreators';
import { taskItemStyle } from '../styles';

import TaskTitle from '../components/TaskTitle';
import MarkContainer from './MarkContainer';
import Icon from '../components/Icon';

class TaskItem extends React.Component {
  

//  { show ? Buttons : null }
  constructor(props) {
    super(props)
    this.state = {
      showButtons: false
    }
  }
  
  change() {
    console.log('change')
    let { dispatch, id } = this.props;
    
    dispatch(changeCurrentTask(id));
  }

  render() {
    
    const { id, title, pomodoros, changeCurrentTask } = this.props;
    
    return (
      <div style={[ taskItemStyle ]}>
        <div className="row">
          
          <TaskTitle onClick={ this.change } headerSize={ 'md' } title={ title } />
           
          <MarkContainer pomodoros={ pomodoros } />

        </div>
      </div>
    );
  }
}

TaskItem = Radium(TaskItem);

export default connect()(TaskItem);
