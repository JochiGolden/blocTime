import React from 'react';
import { connect } from 'react-redux';
import { startCount, setInitialTime, replaceDigit } from '../../actionCreators';
import { selectBtn } from '../../styles';

class SelectBtn extends React.Component {
    
  componentDidMount() {
    this.props.setInitialTime();
  }
  
  handleClick(funcs) {
    funcs[0]();
    funcs[1]();
  }
  
  render() {
    
    const { countingDown, replaceDigit, startCount, label } = this.props;

    return (
      <button type="button"
              className="btn btn-lg"
              style={ selectBtn }
              onClick={ this.handleClick.bind(null, [startCount, replaceDigit]) }>
        { countingDown ? 'Reset' : label }
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectBtn);