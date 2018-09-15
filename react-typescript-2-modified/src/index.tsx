/**
 * https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
 * 
 */


import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello, HelloProps } from "./components/Hello";

let data: HelloProps = {
    compiler: "Typescript",
    framework: "React",
    count: 0,
    onClick: () => { data.count += 1; render(); }
};


function render() {
    ReactDOM.render(<Hello {...data} />, 
    document.getElementById("example"));
}

render();