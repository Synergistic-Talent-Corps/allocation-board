// from a terminal
// npm run build


import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Header } from './header';
import { ClientBlock} from './client-block';
import { OnDeck } from './on-deck';
import { OnDeckMapping } from './on-deck'
import { Footer } from './footer';
import { ClearFloat } from './clear-float';
import { Navbar } from './navbar';


// stand up a development server - express
// React

// json placeholder, then use fetch method
// axios

// file reader using Java script

let runOnDeckArray : string[] = OnDeckMapping();
// let onDeck : Array<string> = [
//     "Consultant 1",
//     "Consultant 2",
//     "Consultant 3",
//     "Consultant 4",
//     "Consultant 5"
// ]

// call function and send in onDeck to get populated
// componentDidMount, call it here

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
        <OnDeck onDeckArray={runOnDeckArray}/>
        <Footer text="Copyright &copy; 2020 tapQA. All Rights Reserved"/>
        </React.StrictMode>,
    document.querySelector('#root')
)
