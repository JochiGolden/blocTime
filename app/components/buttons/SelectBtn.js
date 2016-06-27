import React from 'react';

class SelectBtn extends React.Component {
  
  componentDidMount() {
    console.log(`${this.props.label} button did mount`);
    this.props.setInitialTime();
  }
  
  render() {
    
    const { startCount, label } = this.props;
    
    return (
      <button type="button"
              className="btn btn-lg select"
              onClick={ startCount }>
        { label }
      </button>
    );
  }
}

export default SelectBtn;