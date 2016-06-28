import React from "react";
import { connect } from 'react-redux';
import { main, timerContainer } from '../styles';

import Timer from './Timer';
import MarkContainer from './MarkContainer';
import SelectBtn from '../components/buttons/SelectBtn';

const Main = ({ pomodorosCompleted }) => {
  
  return (
    <div style={ main } className="container text-center">

      <div className="row">
        <div className="container" style={ timerContainer }>
          <Timer />
          <MarkContainer pomodorosCompleted={ pomodorosCompleted } />
        </div>
        <div className="row">
          <SelectBtn />
        </div>

      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pomodorosCompleted : state.setTime.pomodorosCompleted
  };
}

export default connect(mapStateToProps)(Main);