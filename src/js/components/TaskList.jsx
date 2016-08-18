import React from 'react';
import { connect } from 'react-redux';
import { openForm } from '../actions';

import TaskItem from './TaskItem.jsx';
import NewTaskItem from '../sub_components/NewTaskItem.jsx';

class TaskList extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {};
  }
  
  componentWillMount() {
    this.setState({
      PromptComponent :
        <button className="btn-tool btn-new-task"
                onClick={ this.props.openForm }>
          <span className="ion-plus-circled" style={{ marginRight: '5px'}} />
          Add New Task
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
      <div className="row">
        <div className="col">
          <h3 className="row heading">Task List</h3>
          <div className="row">
            <div className="task-list col">

              { this.tasksArray() }

              { NewTaskComponent }

            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
