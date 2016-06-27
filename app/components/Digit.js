import React, { PropTypes } from 'react';

class Digit extends React.Component {

  handleSetTimeOut() {
    const { replaceDigit, countingDown, zeroed, value, index, period, visible } = this.props;
    if (countingDown[index] && visible) {
      if (value > 1) {
        console.log(`decrementing value at index ${index}`);
        window.setTimeout(replaceDigit.bind(null, index), period);
      } else {
        zeroed(index);
      }
    }
  }
  
  componentDidMount() {
    if (this.props.visible) {
      console.log('Visible did mount');
    }
    
    this.handleSetTimeOut();
  }
  
  render() {
    
    const { index, visible, value } = this.props;
    
    return (
        <div className={ visible ? "digit display-element" : "digit hide-element" }>
            { value % 10 }
        </div>
    );
  }
};

Digit.propTypes = {
  currentTime: PropTypes.array.isRequired,
  countingDown: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  replaceDigit: PropTypes.func.isRequired,
  zeroed: PropTypes.func.isRequired
};

export default Digit;