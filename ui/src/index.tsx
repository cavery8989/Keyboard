import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/APP";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);