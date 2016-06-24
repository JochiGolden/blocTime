import React from 'react';
import Digit from './Digit';
import { VelocityTransitionGroup } from 'velocity-react';

// Required Props: currentTime

class StaticTimer extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    const cT = this.props.currentTime
    
    cT.forEach((digit, index) => {
      return cT[index] = digit % 10;
    });
    
    return (
      <div id="timer" >
       <VelocityTransitionGroup
         runOnMount={true}
         enter={{ animation: { opacity: 1 } }}
         leave={{ animation: { opacity: 0 } }}
         duration={500}>
          <Digit value={cT[0]} />
          <Digit value={cT[1]} />
          <div className="digit">:</div>
          <Digit value={cT[2]} />
          <Digit value={cT[3]} />
        </VelocityTransitionGroup>
      </div>
    );
  }
}

export default StaticTimer;