"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function FruitLoops() {
    var fruit = [
        "red",
        "green",
        "blue",
        "yellow"
    ];
    return (React.createElement("ul", null, fruit.map(function (value, index) {
        return React.createElement("li", { key: index }, "(value)");
    })));
}
exports.FruitLoops = FruitLoops;
