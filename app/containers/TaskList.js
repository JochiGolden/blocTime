import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { openForm } from '../actionCreators';
import { taskListStyle, newTaskStyle, toolBtnStyle } from '../styles';

import TaskItem from './TaskItem';
import NewTaskItem from './NewTaskItem';
import Icon from '../components/Icon';

class TaskList extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      newTaskComponent : 
        <button className="col-md-3 col-md-offset-1"
                style={[ toolBtnStyle ]} onClick={ this.props.openForm }>
          <Icon symbol={ 'plus' } /> Add New Task
        </button>
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      newTaskComponent : nextProps.addingTask
        ? <NewTaskItem />
        : <button className="col-md-3 col-md-offset-1"
                  style={[ toolBtnStyle ]} onClick={ this.props.openForm }>
            <Icon symbol={ 'plus' } /> Add New Task
          </button>
    });
  }
  
  render() {
    
    const { klass, list } = this.props;

    return (
      <div style={[ taskListStyle ]} className={ klass }>

        {list.map( task => 
          <TaskItem
            key={ `taskItem-${task.id}` }
            id={ task.id }
            title={ task.title }
            pomodoros={ task.pomodoros } />
        )}

        { this.state.newTaskComponent }
          
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list : state.tasks.list,
    addingTask : state.tasks.addingTask
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openForm : function() {
      dispatch(openForm());
    }
  }
}

TaskList = Radium(TaskList);

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
