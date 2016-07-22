import React from 'react';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { markContainerStyle, currentMarkStyle } from '../styles';

import CompletionMark from '../components/CompletionMark';

class MarkContainer extends React.Component {

  render() {

    let { pomodoros } = this.props;
    
    return (
      <div style={[ markContainerStyle ]}>
        <ReactCSSTransitionGroup
          transitionName="logPomodoro" 
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

        {[...Array(pomodoros)].map((component, index) =>
          <CompletionMark key={ `mark-${index + 1}`} />
         )}

        </ReactCSSTransitionGroup>
      </div>
    );  
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pomodoros : state.tasks.list[ownProps.id].pomodoros
  }
}

MarkContainer = Radium(MarkContainer); 

export default connect(mapStateToProps)(MarkContainer); 
