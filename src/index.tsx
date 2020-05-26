// from a terminal
// npm run build


import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Header } from './header';
import { ClientBlock} from './client-block';
import { OnDeck } from './on-deck';
import { Footer } from './footer';
import { ClearFloat } from './clear-float';
import { Navbar } from './navbar';

let clientBlock : Array<string> = [
    "Consultant 1",
    "Consultant 2",
    "Consultant 3",
    "Consultant 4",
    "Consultant 5"
]

ReactDom.render(
  <React.StrictMode>
        <Header text="tap|QA Allocation Board"/>
        <Navbar/>
        <ClientBlock clientName = "Client 1" clientBlock={clientBlock} />
        <ClientBlock clientName = "Client 2" clientBlock={clientBlock} />
        <ClientBlock clientName = "Client 3" clientBlock={clientBlock} />
        <ClientBlock clientName = "Client 4" clientBlock={clientBlock} />
        <ClientBlock clientName = "Client 5" clientBlock={clientBlock} />        
        <ClientBlock clientName = "Client 4" clientBlock={clientBlock} />
        <ClientBlock clientName = "Client 5" clientBlock={clientBlock} />
        <ClearFloat/>
        <OnDeck/>
        <Footer text="Copyright &copy; 2020 tapQA. All Rights Reserved"/>
        </React.StrictMode>,
    document.querySelector('#root')
)
