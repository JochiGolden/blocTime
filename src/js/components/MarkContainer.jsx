import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

class MarkContainer extends React.Component {

  render() {

    let { pomodoros } = this.props;
    
    return (
      <div className="completion-mark-container">
        <ReactCSSTransitionGroup
          transitionName="logPomodoro" 
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

        {[...Array(pomodoros)].map((component, index) => {
          return <div key={ `mark${index}` }
                      className="completion-mark glyphicon glyphicon-ok" />
        })}

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

export default connect(mapStateToProps)(MarkContainer); 
