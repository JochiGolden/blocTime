import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { startCount, setInitialTime  } from '../../actionCreators';
import { selectBtnStyle } from '../../styles';

let SelectBtn = ({ countingDown, startCount, setInitialTime, label, klass }) => {
  
  function handleClick(funcs) {
    funcs[0]();
    funcs[1]();
  }
  
  return (
    <div className={ klass }>
      <div style={[ selectBtnStyle ]}
           onClick={ handleClick.bind(null, [setInitialTime, startCount]) }>
        { countingDown ? 'Reset' : label }
      </div>
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
