var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      Hello World!
    </h1>
    <h1 className="isi" contentEditable="true">
      Hi!
    </h1>
  </div>,
  document.getElementById("root")
);
