import React from "react";
import Radium from 'radium';
import { taskBtnStyle } from '../styles';

import TaskTitle from '../components/TaskTitle';
import MarkContainer from './MarkContainer';
import TaskListBtns from '../components/TaskListBtns';

class TaskItem extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      Buttons :
        <div style={[ taskBtnStyle ]}>&nbsp;</div>,
      EmptyComponent :
        <div style={[ taskBtnStyle ]}>&nbsp;</div>
    }
  }
    
  showButtons() {
    this.setState({
      Buttons : <TaskListBtns id={ this.props.id } />
    });
  }
  
  hideButtons() {
    this.setState({
        Buttons : this.state.EmptyComponent
    });
  }
  
  render() {
    
    let { id, title, dispatch } = this.props;
    
    return (
      <div key="taskItem"
           onMouseEnter={ this.showButtons.bind(this) }
           onMouseLeave={ this.hideButtons.bind(this) }>
        <div className="row">

            { this.state.Buttons }

            <TaskTitle headerSize={ 'md' } title={ title } />

            <MarkContainer id={ id } />

        </div>
      </div>
    );
  }
}

export default Radium(TaskItem);
