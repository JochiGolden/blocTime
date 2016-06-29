import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { startCount, setInitialTime, replaceDigit } from '../../actionCreators';
import { selectBtnStyle, hoverCursor } from '../../styles';

class SelectBtn extends React.Component {
    
  componentDidMount() {
    this.props.setInitialTime();
  }
  
  handleClick(funcs) {
    funcs[0]();
    funcs[1]();
  }
  
  render() {
    
    const { countingDown, replaceDigit, startCount, label, klass } = this.props;

    return (
      <div className={ klass }>
        <div style={[ selectBtnStyle, hoverCursor ]}
             onClick={ this.handleClick.bind(null, [startCount, replaceDigit]) }>
          { countingDown ? 'Reset' : label }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    label : state.setTime.timerOptions[state.setTime.currentOption].label
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startCount : function() {
      dispatch(startCount());
    },
    setInitialTime : function() {
      dispatch(setInitialTime());
    },
    replaceDigit : function() {
      dispatch(replaceDigit());
    }
  };
}

SelectBtn = Radium(SelectBtn);

export default connect(mapStateToProps, mapDispatchToProps)(SelectBtn);
