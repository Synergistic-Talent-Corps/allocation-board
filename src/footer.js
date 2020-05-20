"use strict";
exports.__esModule = true;
var React = require("react");
function Footer(props) {
    React.useEffect(function () {
        alert(document.querySelector('#myFooter'));
    });
    return (<p id="myFooter" className="primary-footer">{props.text}</p>);
}
exports.Footer = Footer;
Footer.displayName = "Footer";
