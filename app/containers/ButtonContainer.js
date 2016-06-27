import React from "react";
import { connect } from "react-redux";
import SelectBtn from '../components/buttons/SelectBtn';

class ButtonContainer extends React.Component {
  
  componentDidMount() {
    
  }
  
  render() {

    let SelectButton;
    const { startCount, setInitialTime, timerOptions, currentOption } = this.props;
    
    let isCounting = this.props.countingDown.reduce((prev, check) => {
      return prev && check
    }, true);
    let printCounting = isCounting ? "is counting down" : "is not counting down";
    let printLabel = isCounting ? "Reset" : timerOptions[currentOption].label
    
    console.log(`The timer ${printCounting}. Display the ${printLabel} button`)
    
    if (isCounting) {
      SelectButton = <SelectBtn
        label={ "Reset" }
        startCount={ startCount }
        setInitialTime= { setInitialTime } />
    } else {
      SelectButton = <SelectBtn
        label={ timerOptions[currentOption].label }
        startCount={ startCount }
        setInitialTime= { setInitialTime } />
    }
    
    return (
      <div className="row">
        { SelectButton }
      </div>
    );
  }
}

export default ButtonContainer;
