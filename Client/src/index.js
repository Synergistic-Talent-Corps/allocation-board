"use strict";
// from a terminal
// npm run build
exports.__esModule = true;
var React = require("react");
var ReactDom = require("react-dom");
var header_1 = require("./header");
var client_block_1 = require("./client-block");
var on_deck_1 = require("./on-deck");
var footer_1 = require("./footer");
var clear_float_1 = require("./clear-float");
var navbar_1 = require("./navbar");
var onDeck = [
    "Consultant 1",
    "Consultant 2",
    "Consultant 3",
    "Consultant 4",
    "Consultant 5"
];
var clientBlock = [
    "Consultant 1",
    "Consultant 2",
    "Consultant 3",
    "Consultant 4",
    "Consultant 5"
];
ReactDom.render(<div>
        <header_1.Header text="tap|QA Allocation Board"/>
        <navbar_1.Navbar />
        <client_block_1.ClientBlock clientName="Client 1" clientBlock={clientBlock}/>
        <client_block_1.ClientBlock clientName="Client 2" clientBlock={clientBlock}/>
        <client_block_1.ClientBlock clientName="Client 3" clientBlock={clientBlock}/>
        <client_block_1.ClientBlock clientName="Client 4" clientBlock={clientBlock}/>
        <client_block_1.ClientBlock clientName="Client 5" clientBlock={clientBlock}/>
        <client_block_1.ClientBlock clientName="Client 5" clientBlock={clientBlock}/>
        <client_block_1.ClientBlock clientName="Client 5" clientBlock={clientBlock}/>
        <clear_float_1.ClearFloat />
        <on_deck_1.OnDeck onDeck={onDeck}/>
        <footer_1.Footer text="Copyright &copy; 2020 tapQA. All Rights Reserved"/>
    </div>, document.querySelector('#root'));
