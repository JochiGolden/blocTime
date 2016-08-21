import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

class MarkContainer extends React.Component {

  render() {

    let { pomodoros, classes } = this.props;
    
    return (
      <div className={ classes }>
        <ReactCSSTransitionGroup
          transitionName="logPomodoro" 
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

        {[...Array(pomodoros)].map((component, index) => {
          return <div key={ `mark${index}` }
                      className="completion-mark ion-checkmark" />
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
