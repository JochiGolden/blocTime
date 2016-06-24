import React from 'react';

// Required Props: value

class Digit extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log(`Digit with value ${this.props.value} DID MOUNT`);
  }
  
  componentWillReceiveProps() {
    console.log('Digit, receive props');
  }
  
  render() {
    
    return <div className="digit">{this.props.value[0]}</div>
  }
}

export default Digit;