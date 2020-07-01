
// from a terminal
// npm run build

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useState, useEffect } from 'react';
import { Header } from './header';
import { ClientBlock } from './client-block';
import { OnDeck } from './on-deck';
import { Footer } from './footer';
import { ClearFloat } from './clear-float';
import { Navbar } from './navbar';
import { ClientInformation, Client } from './clientinformation';
import { ConsultantInformation } from './consultantinformation';

// main component function
function App () {
    const [ currentPage, setCurrentPage ] = useState<string>('Allocation Board');
    const [ currentClient, setCurrentClient ] = useState<string>('');
    const [ currentConsultant, setCurrentConsultant ] = useState<string>('');

    // state to hold all of the clients
    const [clients, setClients] = useState<Client[]>([]);

    // fetch the clients using an api call
    async function fetchClients() {
        const response = await fetch("http://localhost:5000/api/clients");

        let data = await response.json();

        // set the state for clients
        setClients(data.clients);
    }

    useEffect(() => { fetchClients(); }, []);

    return (
        <div>
            <Navbar />
            {currentPage === 'Allocation Board' && 
                clients.map((client, index) => (<ClientBlock clientName={client.clientName} onPageChange={(value:string) => setCurrentPage(value)}  onClientChange={(value:string) => setCurrentClient(value)} onConsultantChange={(value:string) => setCurrentConsultant(value)} />))}
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

