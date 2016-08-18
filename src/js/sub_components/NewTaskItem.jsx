import React from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../actions';

class NewTaskItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subtaskFields : 1,
      title : "",
      text : []
    }
  }
  
  handleTitleChange(event) {
    let newState = {};
    newState.title = this.state.title.length <= 16
      ? event.target.value
      : event.target.value.substring(0, 17);
    this.setState({...this.state, ...newState});
  }
  
  handleTextChange(index, event) {
    let newState = {};
    newState.text = this.state.text;
    if (this.state.text[index]) {
      if (this.state.text[index].length <= 67) {
        newState.text[index] = event.target.value;
      } else {
        newState.text[index] = event.target.value.substring(0, 68);
      }
    } else {
      newState.text[index] = "" + event.target.value;
    }

    this.setState({...this.state, ...newState});
  }
  
  addAField() {
    if (this.state.subtaskFields < 5) {
      this.setState({
        subtaskFields : this.state.subtaskFields + 1
      });
    }
  }
  
  removeAField() {
    if (this.state.subtaskFields > 0) {
      this.setState({
        subtaskFields : this.state.subtaskFields - 1
      });
    }
  }
  
  finishTask(event) {
    let title = this.state.title.trim(),
        text = this.state.text.map(subtask => subtask.trim());
    this.props.addNewTask(title, text);
  }

  render() {
    let subtasks = [],
        id = this.props.list.length - 1 ,
        i = 0;
    
    while ( i < this.state.subtaskFields ) {
      subtasks.push(
        <input
          key={ `subtask-${i}` } 
          type="text"
          className="new-task-form-field-subtask row"
          value={ this.state.text[i] ? this.state.text[i] : "" }
          placeholder="Write a sub task..."
          onChange={ this.handleTextChange.bind(this, i) } />
      );
      i += 1;
    }
    
    return (
      <div className="new-task-form row">
        <div className="col">
          <input
            type="text"
            className="new-task-form-field-title row"
            value={ this.state.title }
            placeholder="Enter a title..."
            onChange={ this.handleTitleChange.bind(this) } />

          { subtasks.map(subtask => { return subtask }) }
          
          <div className="row">
            <span className="new-task-form-info">
              Add/Remove Subtasks <span className="ion-chevron-right"></span>
            </span>
            <button key={ 'plus' }
                    className="btn-tool"
                    onClick={ this.addAField.bind(this) }>
              <span className="ion-plus-circled"></span>
            </button>
            <button key={ 'minus' }
                    className="btn-tool"
                    onClick={ this.removeAField.bind(this) }>
              <span className="ion-minus-circled"></span>
            </button>
            <button key={ 'finish' }
                    className="btn-tool"
                    style={{ width: '32%' }}
                    onClick={ this.finishTask.bind(this) }>
              <span className="ion-thumbsup" style={{ marginRight: '5px'}}></span>
              Finish
            </button>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list : state.tasks.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewTask : function(title, text) {
      dispatch(addNewTask(title, text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskItem);
