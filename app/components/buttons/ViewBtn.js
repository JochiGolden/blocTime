import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { viewTask } from '../../actionCreators';
import { toolBtnStyle, viewBtnStyle, hoverCursor } from '../../styles';

let ViewBtn = ({ viewTask }) => {

  return (
    <div className="col-md-5"
         onClick={ viewTask } style={[ toolBtnStyle, viewBtnStyle, hoverCursor]}>
      <img src="../assets/viewIcon.png" alt="View Button" width="20" height="20" />
      <p>Start</p>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    viewTask : function() {
      dispatch(viewTask());
    }
  };
}

ViewBtn = Radium(ViewBtn);

export default connect()(ViewBtn);
