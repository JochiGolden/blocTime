import React from "react";
import { connect } from 'react-redux';
import { setCurrentOption, changeCurrentTask, deleteHighlightedTask } from '../actions';

class TaskItem extends React.Component {
  
  swapCurrentTask(id, dispatch) {
    dispatch(setCurrentOption('pomodoro'));
    dispatch(changeCurrentTask(id));
  }
  
  deleteTask(id, dispatch) {
    dispatch(deleteHighlightedTask(id));
  }
  
  render() {
    
    let { id, title, dispatch, countingDown } = this.props;
    
    return (
      <div key="buttonContainer" className="task-list-btn row">
        
        { countingDown ?
            <button key="menu-up" className="btn-disabled">
              <span className="ion-ios-undo" />
            </button>
          :
            <button key="menu-up" className="btn-tool"
                    onClick={ this.swapCurrentTask.bind(null, id, dispatch) }>
              <span className="ion-ios-undo" />
            </button>
        }
        

        <button key="delete" className="btn-tool"
                onClick={ this.deleteTask.bind(null, id, dispatch) }>
          <span className="ion-trash-a" />
        </button>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countingDown: state.setTime.countingDown 
  }
}

export default connect(mapStateToProps)(TaskItem);