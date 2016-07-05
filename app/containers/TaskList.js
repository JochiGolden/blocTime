import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { openForm } from '../actionCreators';
import { taskListStyle, newTaskStyle, toolBtnStyle } from '../styles';

import TaskItem from './TaskItem';
import NewTaskItem from './NewTaskItem';
import Underline from '../components/Underline';
import Icon from '../components/Icon';

class TaskList extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {};
  }
  
  componentWillMount() {
    this.setState({
      PromptComponent :
        <button style={[ toolBtnStyle, {marginLeft: '5%', width: '60%'} ]} onClick={ this.props.openForm }>
          <Icon symbol={ 'plus' } /> Add New Task
        </button>
    })
  }
  
  componentDidMount() {
    this.setState({
      NewTaskComponent : this.state.PromptComponent
    });
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      NewTaskComponent : nextProps.addingTask
        ? <NewTaskItem />
        : this.state.PromptComponent
    });
  }
  
  tasksArray() {
    let arr = Object.keys(this.props.list).map( task =>
      <TaskItem
        key={ task }
        id={ task }
        title={ this.props.list[task].title } />
    );
    
    let sorted = arr.sort((a, b) => {
      a = a.key.slice(-1);
      b = b.key.slice(-1);
      if ( a > b ) {
        return -1;
      } else if ( a < b ) {
        return 1;
      }
      return 0;
    });
    return sorted;
  }
  
  render() {
    
    const { list } = this.props;
    let { NewTaskComponent } = this.state;

    return (
      <div style={[ taskListStyle ]}>
       
        { this.tasksArray() }
        
        <Underline />

        { NewTaskComponent }
          
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalListItems : Object.keys(state.tasks.list).length,
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
