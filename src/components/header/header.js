import React from "react";
import Typed from "react-typed";
import "./header.css";

function header() {
  return (
    <div className="header-info" id="home">
      <h1>Who am I ?</h1>
      <Typed
        strings={[" ", "Computer science student", "or...", '"a coder"', " "]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}

export default header;
