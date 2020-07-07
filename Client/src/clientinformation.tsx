import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// object to store client information
export interface Client {
    clientName: string,
    phoneNumber: string,
    address: string,
    email: string,
    pointOfContact: string
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
            currentClient.pointOfContact = client.pointOfContact;
        }
    })

    return (
        <form className="my-form">
            <div className="form-group" >

                <input type="text" name="company_name" placeholder ={currentClient.clientName} />
                <input type="text" name="phone_number" placeholder ={currentClient.phoneNumber} />
                <br />
                <br />
                <input type="text" name="physical_address" placeholder ={currentClient.address} />
                <input type="text" name="email_address" placeholder ={currentClient.email} />
                <br />
                <br />
                {/* <!-- Write your comments here --> */}
                <div className="poc">
                    <p>Person of Contact</p>
                    <input type="text" name="poc_name" placeholder ="Name" />
                    <input type="text" name="poc_title" placeholder ="Title/Name" />
                    <br />
                    <br />
                    <input type="text" name="phone_number" placeholder ="Phone Number" />
                    <input type="text" name="poc_email" placeholder ="Email" />
                    <br />
                    <br />
                    <input type="checkbox" id="primary_contact" name="primary_contact" value="primary_contact" />
                    <label> Primary Contact </label>
                        <br />
                    <textarea placeholder="Notes"></textarea>
                    <br />
                </div>
                {/* <!-- Write your comments here --> */}
                <br />
                <button type="button">Add Contact</button>
                <br />
                <br />

                <textarea placeholder="Notes"></textarea>
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