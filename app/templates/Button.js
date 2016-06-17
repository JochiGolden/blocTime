import * as React from "react";
var PropTypes = React.PropTypes;

var Button = React.createClass ({
  propTypes: {
    label: PropTypes.string,
    action: PropTypes.func.isRequired
  },
  getDefaultProps: function() {
    return {
      label: "Button"
    };
  },
  render: function() {
    return (
      <button type="button" id="newSession" className="btn btn-lg" onClick={this.props.action}>
        {this.props.label}
      </button>
    );
  }
});

module.exports = Button;