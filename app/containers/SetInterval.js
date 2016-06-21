import React from 'react';

const SetInterval = (Component, state, intervalFn) => class extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = state;
  }

  componentWillMount() {
    this.intervals = [];
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }

  componentDidMount() {
    if (this.state.currentTime > 0) {
      this.setInterval(this.update.bind(this), 1000);
    } else {
      this.props.countFinished();
    }
  }

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  update() {
    this.setState(intervalFn);
  }

  render() {
    
    return <Component {...this.props} {...this.state} />
  }
}

export default SetInterval;
