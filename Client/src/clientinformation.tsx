import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
}

// component function
function ClientInformation() {

    // get the client name from useParams
    let { clientName } = useParams();

    let currentClient = {} as Client;

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
    
    // find the current client
    clients.forEach((client: Client) => {
        if (client.clientName === clientName) {
            currentClient.clientName = client.clientName;
            currentClient.phoneNumber = client.phoneNumber;
            currentClient.address = client.address;
            currentClient.email = client.email;
            currentClient.clientNotes = client.clientNotes;
            currentClient.namePOC = client.namePOC;
            currentClient.titlePOC = client.titlePOC;
            currentClient.phoneNumberPOC = client.phoneNumberPOC;
            currentClient.emailAddressPOC = client.emailAddressPOC;
            currentClient.primaryContact = client.primaryContact;
            currentClient.notesPOC = client.notesPOC;
            currentClient.tapAccountManager = client.tapAccountManager;
        }
    })

    return (
        <form className="client-form">
            <div className="client-form-group" >

                <input type="text" name="company_name" placeholder="Client Name" value={currentClient.clientName} />
                <input type="text" name="phone_number" placeholder="Phone Number" value={currentClient.phoneNumber} />
                <br />
                <br />
                <input type="text" name="physical_address" placeholder="Address" value={currentClient.address} />
                <input type="text" name="email_address" placeholder="Email" value={currentClient.email} />
                <br />
                <br />
                {/* <!-- Write your comments here --> */}
                <div className="poc">
                    <p>Person of Contact</p>
                    <input type="text" name="poc_name" placeholder="Name" value={currentClient.namePOC} />
                    <input type="text" name="poc_title" placeholder="Title/Name" value={currentClient.titlePOC} />
                    <br />
                    <br />
                    <input type="text" name="phone_number" placeholder="Phone Number" value={currentClient.phoneNumberPOC} />
                    <input type="text" name="poc_email" placeholder="Email" value={currentClient.emailAddressPOC} />
                    <br />
                    <br />
                    <input type="checkbox" id="primary_contact" name="primary_contact" value={currentClient.primaryContact} />
                    <label> Primary Contact </label>
                        <br />
                    <textarea rows={5}placeholder="Notes" value={currentClient.notesPOC}></textarea>
                <br />
                </div>
                {/* <!-- Write your comments here --> */}
                <br />
                <button type="button">Add Contact</button>
                <br />
                <br />
                <textarea rows={5} placeholder="Notes" value={currentClient.clientNotes}></textarea>
                <br />
                <br />
                <button type="button" >Edit</button>
                <button type="button">Save and Close</button>
            </div>
        </form>
    )
}

ClientInformation.displayName = "ClientInformation";

export {
    ClientInformation
}