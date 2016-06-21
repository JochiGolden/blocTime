import React from "react";

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="col-md-3" id="timer">
        <span>{this.props.currentTime}</span>
      </div>
    );
  }
}

export default Timer;
