"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function CustomTime() {
    // use React State
    var _a = React.useState(""), time = _a[0], setTime = _a[1];
    var getTime = function () {
        setTime(new Date().toTimeString());
    };
    return (React.createElement("div", null,
        time,
        React.createElement("button", { onClick: getTime }, "Get the Time")));
}
exports.CustomTime = CustomTime;
