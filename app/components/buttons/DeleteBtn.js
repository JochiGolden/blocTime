import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { deleteTask } from '../../actionCreators';
import { toolBtnStyle, deleteBtnStyle, hoverCursor } from '../../styles';

let DeleteBtn = ({ deleteTask }) => {
  
  return (
    <div className="col-md-5"
         onClick={ deleteTask }
         style={[ toolBtnStyle, deleteBtnStyle, hoverCursor ]}>
      <img src="../assets/deleteIcon.png" alt="Delete Button" width="20" height="20" />
      <p>Delete</p>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTask : function() {
      dispatch(deleteTask());
    }
  };
}

DeleteBtn = Radium(DeleteBtn);

export default connect()(DeleteBtn);
