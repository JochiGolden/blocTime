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
        <div className="task-list-filler row row-center">
          <span className="ion-chevron-right"></span>
        </div>
    }
  }
  
  componentWillMount() {
    this.setState({
      Buttons: this.state.EmptyComponent
    })
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
           className="task-list-item row"
           onMouseEnter={ this.showButtons.bind(this) }
           onMouseLeave={ this.hideButtons.bind(this) }>

            { this.state.Buttons }

           <div className="row task-list-item-info">
             <h3 className="task-list-item-title">{ title }</h3>

             <MarkContainer id={ id }
                            classes="completion-mark-container completion-mark-container-list" />
           </div>
      </div>
    );
  }
}
