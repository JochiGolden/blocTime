import React from 'react';
import Radium from 'radium';
import { digitStyle } from '../styles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Digit extends React.Component {
  
  render() {
    
    let { value } = this.props;
    
    return (
      <ReactCSSTransitionGroup
              transitionName="counting" 
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
        <div style={[ digitStyle ]}>{ value }</div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default Radium(Digit);
