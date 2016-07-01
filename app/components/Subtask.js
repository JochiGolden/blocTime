import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { subtaskStyle } from '../styles';

const Subtask = ({ text }) => {

  return (
    <div className="row">
      <p style={[ subtaskStyle ]} className="col-md-10 col-md-offset-1">
        <span style={[ {marginRight: '15px'} ]} className="glyphicon glyphicon-menu-right" />
        { text }
      </p>
    </div>
  );
}

export default Radium(Subtask);
