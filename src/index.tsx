// from a terminal
// npm run build


import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Header } from './header';
import { ClientBlock } from './client-block';
import { OnDeck } from './on-deck';
import { Footer } from './footer';
import { ClearFloat } from './clear-float';
import { Navbar } from './navbar';
import * as clientAllocations from './json/clientAllocations.json'

let clientArray: Array<string> = [];

function ClientMapping(clientArray: Array<string>) {
    var obj = clientAllocations.clients
    obj.forEach(element => {
        if (element.name != "On Deck") { clientArray.push(element.name) }
    });
    return clientArray;
}

ClientMapping(clientArray);

ReactDom.render(
    <React.StrictMode>
        <Header text="tap|QA Allocation Board" />
        <Navbar />
        {clientArray.map((clientName, index) => (
            <ClientBlock clientName={clientName}></ClientBlock>
        ))}
        <ClearFloat />
        <OnDeck />
        <Footer text="Copyright &copy; 2020 tapQA. All Rights Reserved" />
    </React.StrictMode>,
    document.querySelector('#root')
)
