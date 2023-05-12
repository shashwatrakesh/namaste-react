import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * <div id="parent">
 *      <div id="child1">
 *              <h1 id="heading">Sibling 1</h1>
 *              <h1 id="heading">Sibling 2</h1>
 *      </div>
 *      <div id="child2">
 *              <h1 id="heading">Sibling 1</h1>
 *              <h1 id="heading">Sibling 2</h1>
 *      </div>
 * </div>
 */

/* 
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Sibling 1"),
    React.createElement("h1", { id: "heading" }, "Sibling 2"),
  ]),
  ,
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Sibling 1"),
    React.createElement("h1", { id: "heading" }, "Sibling 2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); //object

*/

//React Element
/*
const jsxHeading = (
  <h1 className="heading">Hello World from React using JSX 🚀!</h1>
);
*/

//console.log(jsxHeading); //object

const elem = <span>React Element</span>;
const titleElement = (
  <h1 className="heading">{elem}Hello World from React Element 🚀!</h1> //element inside element
);

//React Functional Component
const Title = () => {
  return (
    <h1 className="heading" tabIndex="5">
      Hello World from React using JSX 🚀!
    </h1>
  );
};

// component inside component
// element inside compmnent
const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      {Title()}
      <Title></Title>
      {titleElement}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // Now it becaomes an HTML element when we render it on the DOM.

//using multiple roots
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(titleElement); // Now it becomes an HTML element when we render it on the DOM.
