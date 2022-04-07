var React = require("react");
var ReactDOM = require("react-dom");

const styleObj = { color: "blue" };

ReactDOM.render(
  <div>
    <h1 style={styleObj}>Hello World!</h1>

    <h1 style={{ color: "red" }}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
