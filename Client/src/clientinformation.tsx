import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'

type ClientInformationProps = {
    onPageChange: Function;
    clientName: string;
}

// object to store client information from the json
interface ClientInfo {
    clientName: string,
    phoneNumber: string,
    address: string,
    email: string,
    pointOfContact: string
}

// get the client information
function getClientInfo(Client: string, clientInfo: ClientInfo) {
    var obj = clientAllocations.clients;

    // TRY USING A FILTER FUNCTION TO RETURN THE SPECIFIC CLIENT!!!

    // obj.filter

    obj.forEach(element => {
        if (element.clientName == Client) {
            clientInfo.clientName = element.clientName;
            clientInfo.phoneNumber = element.phoneNumber;
            clientInfo.address = element.address;
            clientInfo.email = element.email;
            clientInfo.pointOfContact = element.pointOfContact;
        }
    })
}

function ClientInformation(props: ClientInformationProps) {
    var obj = clientAllocations.clients
    let clientInfo = {} as ClientInfo;

    getClientInfo(props.clientName, clientInfo);

    return (
        <form className="my-form">
            <button type="button" onClick={() => props.onPageChange('Allocation Board')}>Back</button>
            <div className="form-group" >

                <input type="text" name="company_name" placeholder ={props.clientName} />
                <input type="text" name="phone_number" placeholder ={clientInfo.phoneNumber} />
                <br />
                <br />
                <input type="text" name="physical_address" placeholder ={clientInfo.address} />
                <input type="text" name="email_address" placeholder ={clientInfo.email} />
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