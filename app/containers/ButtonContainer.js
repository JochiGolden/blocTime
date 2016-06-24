import React from "react";

// Requires:
//    setTime.currentOption,
//    setInitialTime(fn)

class ButtonContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }
    
  render() {
    
    const options = {};
    switch (this.props.currentOption) {
        case 'pomodoro': options.startTime = [0, 5, 10, 10]; options.label = "Pomodoro"; break;
        case 'shortBreak': options.startTime = [0, 5, 10, 10]; options.label = "Short Break"; break;
        case 'longBreak': options.startTime = [3, 10, 10, 10]; options.label = "Long Break"; break;
    }
    
    return (
      <button type="button"
              className="btn btn-lg"
              onClick={this.props.setInitialTime.bind(null, options.startTime)}>
        {options.label}
      </button>
    );
  }
}

export default ButtonContainer;