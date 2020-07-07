
// from a terminal
// npm run build

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './header';
import { ClientBlock } from './client-block';
import { OnDeck } from './on-deck';
import { Footer } from './footer';
import { Navbar } from './navbar';
import { ClientInformation, Client } from './clientinformation';
import { ConsultantInformation } from './consultantinformation';

// main component function
function App () {
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
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        {clients.map((client, index) => (<ClientBlock key={index} clientName={client.clientName} />))}
                        <div className="clr" />
                        <OnDeck />
                    </Route>
                    <Route path="/client/:clientName">
                        <ClientInformation />
                    </Route>
                    <Route path="/consultant/:consultantName">
                        <ConsultantInformation />
                    </Route>
                </Switch>
            </div>
        </Router>
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

