import React from "react";

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        {React.cloneElement( this.props.children, {key: this.props} )}
      </div>
    );
  }
});

module.exports = Main;