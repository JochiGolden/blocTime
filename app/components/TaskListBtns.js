import React from "react";
import Radium from 'radium';
import { connect } from 'react-redux';
import { setCurrentOption, changeCurrentTask, deleteHighlightedTask } from '../actionCreators';
import { toolBtnStyle, disabledBtnStyle, taskBtnStyle } from '../styles';

import Icon from '../components/Icon';

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
      <div key="buttonContainer" style={[ taskBtnStyle ]}>
        
        { countingDown ?
            <button key="menu-up" style={[ disabledBtnStyle ]}>
              <Icon symbol={ 'circle-arrow-up' } />
            </button>
          :
            <button key="menu-up" style={[ toolBtnStyle ]}
                    onClick={ this.swapCurrentTask.bind(null, id, dispatch) }>
              <Icon symbol={ 'circle-arrow-up' } />
            </button>
        }
        

        <button key="delete" style={[ toolBtnStyle ]}
                onClick={ this.deleteTask.bind(null, id, dispatch) }>
          <Icon symbol={ 'remove-sign' } />
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

TaskItem = Radium(TaskItem);

export default connect(mapStateToProps)(TaskItem);