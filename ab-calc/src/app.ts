import * as ReactDOM from "react-dom";
import * as React from "react";
import { Calculator } from './calculator';

const element = React.createElement(Calculator);

ReactDOM.render(
    element,
    document.getElementById("ab-calculator")
);
