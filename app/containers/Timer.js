import React from 'react';
import { digit, timer } from '../styles';
import { connect } from 'react-redux';
import { countFinished, replaceDigit, playADing } from '../actionCreators';

import SetInterval from './SetInterval';
import Digit from '../components/Digit';

class Timer extends React.Component {
  
  componentDidMount() {
    this.forceUpdate();
  }
  
  render() {
    console.log('Timer is rendering');
    console.log(`counting down is ${this.props.countingDown}`);
    const { currentTime, countingDown, countFinished, replaceDigit, playADing } = this.props;
    
    let Counter = countingDown ?
        SetInterval(Digit, { currentTime, countingDown, countFinished, replaceDigit, playADing })
        :
        SetInterval(Digit, { currentTime, countingDown, countFinished, replaceDigit, playADing });
    
    return <Counter />;

  }
}

function mapStateToProps(state) {
  return {
    currentTime : state.setTime.currentTime,
    countingDown : state.setTime.countingDown
  };
}


function mapDispatchToProps(dispatch) {
  return {
    countFinished : function() {
      dispatch(countFinished());
    },
    replaceDigit : function() {
      dispatch(replaceDigit());
    },
    playADing : function() {
      dispatch(playADing());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
