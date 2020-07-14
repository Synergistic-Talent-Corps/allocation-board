import * as React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { InputFloatLeft, InputRight, TextArea, ButtonLeft, ButtonRight, DivSubForm, Form } from './ui/styledcomponents'
import { Client, ClientsContext } from './store';

// component function
function ClientInformation() {

    // access the ClientsContext in store
    const storeClients: Array<Client> = useContext(ClientsContext);

    // // get the client name that was passed in on the route from useParams
    let { clientName } = useParams();

    let currentClient = {} as Client;

    // find the current client
    storeClients.forEach((client: Client) => {
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
        <Form>
            <div>
                <InputFloatLeft type="text" name="company_name" placeholder={currentClient.clientName} />
                <InputRight type="text" name="phone_number" placeholder={currentClient.phoneNumber} />
                <br />
                <br />
                <InputFloatLeft type="text" name="physical_address" placeholder={currentClient.address} />
                <InputRight type="text" name="email_address" placeholder={currentClient.email} />
                <br />
                <br />
                {/* <!-- Write your comments here --> */}
                <DivSubForm>
                    <p>Person of Contact</p>
                    <InputFloatLeft type="text" name="poc_name" placeholder={currentClient.namePOC} />
                    <InputRight type="text" name="poc_title" placeholder={currentClient.titlePOC} />
                    <br />
                    <br />
                    <InputFloatLeft type="text" name="phone_number" placeholder={currentClient.phoneNumberPOC} />
                    <InputRight type="text" name="poc_email" placeholder={currentClient.emailAddressPOC} />
                    <br />
                    <br />
                    <input type="checkbox" id="primary_contact" name="primary_contact" value={currentClient.primaryContact} />
                    <label> Primary Contact </label>
                        <br />
                    <TextArea rows={5} placeholder={currentClient.notesPOC} />
                <br />
                </DivSubForm>
                <br />
                <ButtonLeft type="button">Add Contact</ButtonLeft>
                <br />
                <br />
                <TextArea rows={5} placeholder={currentClient.clientNotes} />
                <br />
                <br />
                <ButtonLeft type="button" >Edit</ButtonLeft>
                <ButtonRight type="button">Save and Close</ButtonRight>
            </div>
        </Form>
    )
}

ClientInformation.displayName = "ClientInformation";

export {
    ClientInformation
}