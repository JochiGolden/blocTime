import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Subtask extends Component {

  constructor(props) {
    super(props)
    this.state = {
      completed: false,
      icon: 'ion-chevron-right'
    }
  }
  
  handleClick() {
    this.state.completed
      ? this.setState({ completed: false, icon: 'ion-chevron-right' })
      : this.setState({ completed: true, icon: 'ion-minus' })
  }
  
  render() {
    
    let { icon, completed } = this.state
    
    return (
      <div className="row">
        <p className={ 'subtask' + (completed ? ' cross-out' : '')}
           onClick={ this.handleClick.bind(this) }>
          <span style={{ marginRight: '15px' }}
                className={ `${icon} subtask-icon` }></span>
          { this.props.text }
        </p>
      </div>
    )
  }
}
