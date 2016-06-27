import React from 'react';
import VisibleDigit from './VisibleDigit';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class DigitContainer extends React.Component {
  
  render() {
    
    return (
      <ReactCSSTransitionGroup 
       transitionAppear={true} 
       component="div" transitionName="digit" 
       transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <VisibleDigit key={ 11 } index={this.props.index} value={10} />
        <VisibleDigit key={ 10 } index={this.props.index} value={9} />
        <VisibleDigit key={ 9 } index={this.props.index} value={8} />
        <VisibleDigit key={ 8 } index={this.props.index} value={7} />
        <VisibleDigit key={ 7 } index={this.props.index} value={6} />
        <VisibleDigit key={ 6 } index={this.props.index} value={5} />
        <VisibleDigit key={ 5 } index={this.props.index} value={4} />
        <VisibleDigit key={ 4 } index={this.props.index} value={3} />
        <VisibleDigit key={ 3 } index={this.props.index} value={2} />
        <VisibleDigit key={ 2 } index={this.props.index} value={1} />
        <VisibleDigit key={ 1 } index={this.props.index} value={0} />
      </ReactCSSTransitionGroup>
    );
  }
}

export default DigitContainer;