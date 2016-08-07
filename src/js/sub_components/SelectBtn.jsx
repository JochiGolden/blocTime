import React from 'react';
import { connect } from 'react-redux';
import { startCount, setInitialTime  } from '../actions';

const SelectBtn = ({ countingDown, startCount, setInitialTime, label }) => {

  function handleClick(funcs) {
    funcs[0]();
    funcs[1]();
  }
  
  return (
      <div className={ countingDown ? 'btn-select' : 'btn-select-stopped'}
           onClick={ handleClick.bind(null, [setInitialTime, startCount]) }>
          { countingDown
              ? <p>Reset</p>
              : <p>
                  <span>Begin</span>
                  <br />
                  <span>{ label }</span>
                </p>
          }
      </div>
  );
}

function mapStateToProps(state) {
  return {
    label : state.setTime.timerOptions[state.setTime.currentOption].label,
    countingDown : state.setTime.countingDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startCount : function() {
      dispatch(startCount());
    },
    setInitialTime : function() {
      dispatch(setInitialTime());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectBtn);
