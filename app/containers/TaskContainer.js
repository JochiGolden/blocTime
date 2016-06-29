import React from 'react';
import { connect } from 'react-redux';
import { taskContainerStyle, bound } from '../styles';

import TaskItem from '../components/TaskItem';

const TaskContainer = ({ klass, tasks }) => {
  
  return (
      <div style={{...taskContainerStyle, ...bound}} className={ klass }>
        {tasks.map( task => 
          <TaskItem
            key={ task.id }
            title={ task.title }
            pomodoros={ task.pomodoros } />
        )}
      </div>
  );
}

function mapStateToProps(state) {
  return {
    tasks : state.tasks
  };
}

export default connect(mapStateToProps)(TaskContainer);
