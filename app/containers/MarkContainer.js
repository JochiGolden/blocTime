import React from 'react';
import CompletionMark from '../components/CompletionMark';

// Requires: setTime.pomodorosCompleted

class MarkContainer extends React.Component {
  
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="col-md-8 col-md-offset-1" id="markContainer">
        <div className="row" id="markContainerText">
          Completed Pomodoros
        </div>
        <div className="row" id="marks">
          {[...Array(this.props.pomodorosCompleted)].map((component, index) =>
            <CompletionMark key={index + 1} />
           )}
        </div>
      </div>
    );
  }
}

export default MarkContainer;