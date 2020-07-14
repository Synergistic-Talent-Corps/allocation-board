import * as React from 'react';
import { useState, useEffect } from 'react';

type StoreProps = {
    children: React.ReactNode;
};

// object to store client information
export interface Client {
    clientName: string,
    phoneNumber: string,
    address: string,
    email: string,
    clientNotes: string,
    namePOC: string,
    titlePOC: string,
    phoneNumberPOC: string,
    emailAddressPOC: string,
    primaryContact: string,
    notesPOC: string,
    tapAccountManager: string
};

// object to store consultant information
export interface Consultant {
    consultantName: string,
    title: string,
    email: string,
    splitAllocation: string,
    consultantSkills: string,
    consultantNotes: string
};

// object to store allocations
export interface Allocation {
    consultantName: string,
    clientName: string,
    clientStartDate: string,
    clientEndDate: string,
    teamLead: boolean,
    tentative: boolean,
    splitAllocation: boolean
};

// create the Client Context
const defaultClients: Array<Client> = [];
export const ClientsContext = React.createContext( defaultClients );

// create the Consultant Context
const defaultConsultants: Array<Consultant> = [];
export const ConsultantsContext = React.createContext( defaultConsultants );

// create the Allocations Context
const defaultAllocations: Array<Allocation> = [];
export const AllocationsContext = React.createContext( defaultAllocations );

// main component function
function Store(props: StoreProps) {

    // state to hold all of the clients
    const [clients, setClients] = useState<Client[]>([]);

    // fetch the clients using an api call
    async function fetchClients() {
        const response = await fetch("http://localhost:5000/api/clients");

        let data = await response.json();

        // set the state for clients
        setClients(data.clients);
    };

    // state to hold all of the consultants
    const [consultants, setConsultants] = useState<Consultant[]>([]);

    // fetch the consultants using an api call
    async function fetchConsultants() {
        const response = await fetch("http://localhost:5000/api/consultants");

        let data = await response.json();
    
        // set the state for consultants
        setConsultants(data.consultants);
    };

    // state to hold all of the allocations
    const [allocations, setAllocations] = useState<Allocation[]>([]);

    // fetch the allocations using an api call
    async function fetchAllocations() {
        const response = await fetch("http://localhost:5000/api/allocations");

        let data = await response.json();
    
        // set the state for allocations
        setAllocations(data.clientAllocations);
    };
    
    useEffect(() => {
        fetchClients();
        fetchConsultants();
        fetchAllocations();
    }, []);

    return (
        <AllocationsContext.Provider value={allocations}>
            <ClientsContext.Provider value={clients}>
                <ConsultantsContext.Provider value={consultants}>
                    {props.children}
                </ConsultantsContext.Provider>
            </ClientsContext.Provider>
        </AllocationsContext.Provider>
    );
};

Store.displayName = "Store";

export {
    Store
}
