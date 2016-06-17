import React from "react";
var PropTypes = React.PropTypes;

var Timer = React.createClass({
  propTypes: {
    // Time in minutes, integer
    totalTime: PropTypes.number.isRequired
  },
  getInitialState: function() {
    this.startTime = this.props.totalTime;
    return {
      totalTime: this.startTime
    };
  },
  componentDidMount: function() {
    this.interval = setInterval(function() {
      if (this.state.totalTime > 0) {
        this.setState({
          totalTime: this.state.totalTime - 1
        });
      } else {
        clearInterval(this.interval);
      }
    }.bind(this), 1000);
  },
  render: function() {
    return (
      <div class="container">
        <p>{this.state.totalTime}</p>
      </div>
    );
  }
});

module.exports = Timer;