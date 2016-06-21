import React from "react";

// Requires:
//    setTime.currentOption,
//    beginCountDown(fn),
//    setInitialTime(fn)

class ButtonContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }
    
  render() {
    
    let button = {
      template: (label, func) => {
        return (
          <div className="container">
            <button type="button"
                    className="btn btn-lg"
                    onClick={func}>
              {label}
            </button>
          </div>
        );
      }
    }
    
    switch (this.props.currentOption) {
      case 'pomodoro':
        return button.template(
          'Pomodoro', this.props.setInitialTime.bind(null, this.props.currentOption));
      case 'shortBreak' :
        return button.template(
          'Short Break', this.props.setInitialTime.bind(null, this.props.currentOption));
      case 'longBreak' :
        return button.template(
          'Long Break', this.props.setInitialTime.bind(null, this.props.currentOption));
    }
  }
}

export default ButtonContainer;