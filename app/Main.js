import React from "react";
import { mainStyle, topContainerStyle, bound } from './styles';

import Timer from './containers/Timer';
import CurrentTaskContainer from './containers/CurrentTaskContainer';
import TaskList from './containers/TaskList';

const Main = ({ pomodorosCompleted }) => {
  
  return (
    <div style={ mainStyle } className="container">
      <div ClassName="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="row">

              <Timer />

          </div>
          <div className="row">

              <CurrentTaskContainer  />

          </div>
          <div className="row">

            <TaskList />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;