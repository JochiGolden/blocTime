import React from "react";
import { taskItemStyle, underline } from '../styles';

import ViewBtn from './buttons/ViewBtn';
import EditBtn from './buttons/EditBtn';
import DeleteBtn from './buttons/DeleteBtn';
import TaskTitle from './TaskTitle';
import MarkContainer from '../containers/MarkContainer';

const TaskItem = ({ title, pomodoros }) => {
  
  return (
    <div>
      <div style={ taskItemStyle } className="row">
        
        <div className="col-md-2 col-md-offset-1">
          <ViewBtn />
          <DeleteBtn />
        </div>

        <TaskTitle klass={ "col-md-5" } title={ title } />

        <MarkContainer klass={ "col-md-3" } pomodoros={ pomodoros } />

      </div>
      <div style={ underline } className="row" />
    </div>
  );
}

export default TaskItem;
