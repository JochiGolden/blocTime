import React from 'react';
import DigitContainer from '../containers/DigitContainer';

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    console.log('Timer will mount');
    let isCounting = this.props.countingDown.reduce((prev, check) => {
      return prev || check
    });
    
    this.setState({
      display : isCounting ? 'timer-active' : 'timer-static'
    });
  }
  
  render() {
    let activeClass, staticClass;
    
    if (this.state.display === 'timer-active') {
      activeClass = "display-element";
      staticClass = "hide-element";
    } else {
      activeClass = "hide-element";
      staticClass = "display-element";
    }
    
    return (
      <div id="timer">
        <div className={ activeClass }>
          <DigitContainer id="minTens" index={0} />
          <DigitContainer id="minOnes" index={1} />
          <div className="digit">:</div>
          <DigitContainer id="secTens" index={2} />
          <DigitContainer id="secOnes" index={3} />
        </div>
        <div className={ staticClass }>
          <div className="digit">{ this.props.currentTime[0] % 10 }</div>
          <div className="digit">{ this.props.currentTime[1] % 10 }</div>
          <div className="digit">:</div>
          <div className="digit">{ this.props.currentTime[2] % 10 }</div>
          <div className="digit">{ this.props.currentTime[3] % 10 }</div>
        </div>
      </div>
    );
  }
}

export default Timer;
