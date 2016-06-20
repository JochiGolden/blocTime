import React from "react";
var PropTypes = React.PropTypes;

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <div class="container">
        <p>{this.props.currentTime}</p>
      </div>
    );
  }
}

export default Timer;
