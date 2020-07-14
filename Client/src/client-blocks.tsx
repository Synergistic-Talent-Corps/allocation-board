import * as React from 'react';
import { useContext } from 'react';
import { Client, ClientsContext } from './store';
import { ClientBlock } from './client-block';

// component function
function ClientBlocks() {

    // access the ClientsContext in store
    const storeClients: Array<Client>= useContext(ClientsContext);

    return (
        <div>
            {storeClients.map((client, index) => (<ClientBlock key={index} clientName={client.clientName} />))}
            <div className="clr" />
        </ div>
    )
}

ClientBlocks.displayName = "ClientBlocks";

export {
    ClientBlocks
}