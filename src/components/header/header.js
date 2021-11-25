import React from "react";
import Typed from "react-typed";
import "./header.css";

function header() {
  return (
    <div className="header-info">
      <h1>What am I ?</h1>
      <Typed
        strings={[
          " ",
          "Computer science student",
          "Also known as an",
          "Глек",
          "Or!",
          '"a coder"',
          " ",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}

export default header;
