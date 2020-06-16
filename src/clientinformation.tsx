import * as React from 'react';

type ClientInformationProps = {
    onPageChange: Function;
    clientName: string;
}

function ClientInformation(props: ClientInformationProps) {

    return (

        <form className="my-form">
            <button type="button" onClick={() => props.onPageChange('Allocation Board')}>Back</button>
            <div className="form-group" >

                <input type="text" name="company_name" placeholder ={props.clientName} />
                <input type="text" name="phone_number" placeholder ="Phone Number" />
                <br />
                <br />
                <input type="text" name="physical_address" placeholder ="Physical Address" />
                <input type="text" name="email_address" placeholder ="Email Address" />
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