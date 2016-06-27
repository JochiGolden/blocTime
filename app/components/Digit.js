import React from 'react';
import { connect } from 'react-redux';


const DigitContainer = ({ currentTime, index }) => {
    
  return <div className="digit">{ currentTime[index] }</div>
}

function mapStateToProps(state) {
  return {
    currentTime : state.setTime.currentTime
  };
}

export default connect(mapStateToProps)(DigitContainer);
