import React from "react";
import ReactDOM from "react-dom";

const fName = "John";
const lName = "Thor";
const currentDate = new Date();
console.log(currentDate.getFullYear());

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <h1>Hello {`${fName} ${lName}`}!</h1> {/* ES6 Template Literals */}
    <p>My lucky number is {Math.floor(Math.random() * 10)}</p>
    <p>Copyright {currentDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
