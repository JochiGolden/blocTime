import React from "react";

class CompletionMark extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <span className="completion-mark">✘</span>
    );
  }
}

export default CompletionMark;