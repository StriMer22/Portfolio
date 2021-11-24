import React from "react";
import Typed from "react-typed";

function header() {
  return (
    <div>
      <h1>What am I ?</h1>
      <Typed
        strings={["Dungeon Master", "or....", " ", "ANIKI"]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed>
    </div>
  );
}

export default header;
