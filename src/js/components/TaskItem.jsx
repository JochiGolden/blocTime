import React from "react";

import MarkContainer from './MarkContainer.jsx';
import TaskListBtns from '../sub_components/TaskListBtns.jsx';

export default class TaskItem extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      Buttons :
        <div className="task-list-btn">&nbsp;</div>,
      EmptyComponent :
        <div className="task-list-btn">&nbsp;</div>
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
      <div key={ id }
           className="task-list-item"
           onMouseEnter={ this.showButtons.bind(this) }
           onMouseLeave={ this.hideButtons.bind(this) }>
        <div className="row">

            { this.state.Buttons }

            <h3 className="task-list-item-title">{ title }</h3>

            <MarkContainer id={ id } />

        </div>
      </div>
    );
  }
}
