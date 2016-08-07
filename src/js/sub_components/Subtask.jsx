import React from 'react';
import { connect } from 'react-redux';

export const Subtask = ({ text }) => {

  return (
    <div className="row">
      <p className="subtask">
        <span style={{ marginRight: '15px' }} className="glyphicon glyphicon-menu-right" />
        { text }
      </p>
    </div>
  );
}
