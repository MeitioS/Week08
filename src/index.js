// React Template
//var React = require("react");
//var ReactDOM = require("react-dom");

// Pure React
// const h1 = React.createElement("h1", {}, "Hello World");
// ReactDOM.render(h1, document.getElementById("root"));

// Variable in JSX
// const fName = "John";
// const lName = "Thor";
// const currentDate = new Date();
// console.log(currentDate.getFullYear());

// ReactDOM.render(
//   <div>
//     <h1>Hello {fName + " " + lName}!</h1> {/* Template penulisan biasa*/}
//     <h1>
//       Hello {fName} {lName}!
//     </h1>
//     <h1>Hello {`${fName} ${lName}`}!</h1> {/* Format ES6*/}
//     <p>My lucky number is {Math.floor(Math.random() * 10)}</p>
//     <p>Copyright {currentDate.getFullYear()}</p>
//   </div>,
//   document.getElementById("root")
// );

// React JSX with CSS external
// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true">
//       Hello World!
//     </h1>
//     <h1 className="isi" contentEditable="true">
//       Hi!
//     </h1>
//   </div>,
//   document.getElementById("root")
// );

//Tugas
var React = require("react");
var ReactDOM = require("react-dom");
var randomColor = require("randomcolor");
var color = randomColor();

randomColor();

randomColor({
  count: 100,
  luminosity: "random",
  hue: "random"
});

const customStyle1 = {
  color: "red"
};
const customStyle2 = {
  color: "red"
};
const customStyle3 = {
  color: "red"
};
const customStyle4 = {
  color: "red"
};
const customStyle5 = {
  color: "red"
};
const customStyle6 = {
  color: "red"
};

customStyle1.color = randomColor();
customStyle2.color = randomColor();
customStyle3.color = randomColor();
customStyle4.color = randomColor();
customStyle5.color = randomColor();
customStyle6.color = randomColor();

ReactDOM.render(
  <div>
    <h1 style={customStyle1}>Hello World!</h1>
    <p style={customStyle2}>My Name is YOURNAME HERE</p>
    <p style={customStyle3}>I am a handsome/pretty human being</p>
    <p style={customStyle4}>I love to learn JavaScript</p>
    <p style={customStyle5}>I am a super high quality student</p>
    <p style={customStyle6}>I am going to be a super star</p>
  </div>,
  document.getElementById("root")
);
