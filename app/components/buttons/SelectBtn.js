import React from 'react';

class SelectBtn extends React.Component {
    
  componentDidMount() {
    this.props.setInitialTime();
  }
  
  render() {
    
    const { countingDown, startCount, label } = this.props;

    return (
      <button type="button"
              className="btn btn-lg select"
              onClick={ startCount }>
        { countingDown ? 'Reset' : label }
      </button>
    );
  }
}

export default SelectBtn;