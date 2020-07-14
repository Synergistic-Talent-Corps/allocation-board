import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './header';
import { Navbar } from './navbar';
import { ClientBlocks } from './client-blocks';
import { OnDeck } from './on-deck';
import { Footer } from './footer';
import { ClientInformation } from './clientinformation';
import { ConsultantInformation } from './consultantinformation';
import { Store } from './store';

// main component function
function App () {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Store>
                    <Route exact path="/">
                        <ClientBlocks />
                        <OnDeck />
                    </Route>
                    <Route path="/client/:clientName">
                        <ClientInformation />
                    </Route>
                    <Route path="/consultant/:consultantName">
                        <ConsultantInformation />
                    </Route>
                </Store>
            </Switch>
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

