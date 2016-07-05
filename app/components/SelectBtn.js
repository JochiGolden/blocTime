import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { startCount, setInitialTime  } from '../actionCreators';
import { selectBtnStyle, selectBtnTextStyle } from '../styles';

let SelectBtn = ({ countingDown, startCount, setInitialTime, label, klass }) => {

  function handleClick(funcs) {
    funcs[0]();
    funcs[1]();
  }
  
  return (
      <div style={[ selectBtnStyle ]}
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

SelectBtn = Radium(SelectBtn);

export default connect(mapStateToProps, mapDispatchToProps)(SelectBtn);
