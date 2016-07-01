import React from "react";
import { mainStyle, topContainerStyle, bound } from './styles';

import Timer from './containers/Timer';
import MarkContainer from './containers/MarkContainer';
import SelectBtn from './components/buttons/SelectBtn';
import CurrentTaskContainer from './containers/CurrentTaskContainer';
import TaskList from './containers/TaskList';

const Main = ({ pomodorosCompleted }) => {
  
  return (
    <div style={ mainStyle } className="container">
      <div className="row">
        <div style={{...topContainerStyle, ...bound}} className="col-md-12">
          <div className="col-md-3">
            <div className="row">

              <Timer klass={ "col-md-10 col-md-offset-2" } />

            </div>
            <div className="row">

              <SelectBtn klass={ "col-md-9 col-md-offset-2" } />

            </div>
          </div>
          <div className="col-md-9">

            <CurrentTaskContainer  />

          </div>
        </div>
      </div>

      <div className="row">

        <TaskList klass={ "col-md-12" } />

      </div>
    </div>
  );
}

export default Main;