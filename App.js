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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
