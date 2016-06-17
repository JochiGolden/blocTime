import React from "react";

function MainContentWrapper (props) {
  return (
    <div className="jumbotron col-sm-12 text-center main-content-wrapper">
      {props.children}
    </div>
  );
}

module.exports = MainContentWrapper;