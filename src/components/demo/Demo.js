import React from "react";
import recatimg from "../../logo.svg";

function Demo() {
  return (
    <div>
      Demo
      <img
        src={recatimg}
        alt="react logo"
        style={{ height: "100px", width: "100px" }}
      ></img>
    </div>
  );
}

export default Demo;
