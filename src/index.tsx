
// from a terminal
// npm run build

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useState } from 'react';
import { Header } from './header';
import { ClientBlock } from './client-block';
import { OnDeck } from './on-deck';
import { Footer } from './footer';
import { ClearFloat } from './clear-float';
import { Navbar } from './navbar';
import { ClientInformation } from './clientinformation';
import { ConsultantInformation } from './consultantinformation'
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

function App () {
    const [ currentPage, setCurrentPage ] = useState<string>('Allocation Board');
    const [ currentClient, setCurrentClient ] = useState<string>('');
    const [ currentConsultant, setCurrentConsultant ] = useState<string>('');

    return (
        <div>
            <Navbar />
            {currentPage === 'Allocation Board' && 
                clientArray.map((clientName, index) => (<ClientBlock clientName={clientName} onPageChange={(value:string) => setCurrentPage(value)}  onClientChange={(value:string) => setCurrentClient(value)} onConsultantChange={(value:string) => setCurrentConsultant(value)} />))}
            {currentPage === 'Allocation Board' && <ClearFloat />}
            {currentPage === 'Allocation Board' && <OnDeck onPageChange={(value:string) => setCurrentPage(value)}  onClientChange={(value:string) => setCurrentClient(value)} onConsultantChange={(value:string) => setCurrentConsultant(value)}/>}
            {currentPage === 'Client Information' && <ClientInformation onPageChange={(value:string) => setCurrentPage(value)} clientName={currentClient} />}
            {currentPage === 'Consultant Information' && <ConsultantInformation onPageChange={(value:string) => setCurrentPage(value)} consultantName={currentConsultant} />}
        </div>
    )
}

ReactDom.render(
    <React.StrictMode>
        <Header text="tap|QA Allocation Board" />
        <App />
        <Footer text="Copyright &copy; 2020 tapQA. All Rights Reserved" />
    </React.StrictMode>,
    document.querySelector('#root')
)

