import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { editTask } from '../../actionCreators';
import { toolBtnStyle, editBtnStyle, hoverCursor } from '../../styles';

let EditBtn = ({ editTask }) => {

  return (
    <div onClick={ editTask }>
      <img style={[ toolBtnStyle, editBtnStyle, hoverCursor ]}
        src="../assets/editIcon.png" alt="Edit Button" width="20" height="21" />
      <p>Edit</p>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    editTask : function() {
      dispatch(editTask());
    }
  };
}

EditBtn = Radium(EditBtn);

export default connect()(EditBtn);
