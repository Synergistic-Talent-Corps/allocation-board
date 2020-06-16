import * as React from 'react';

type ConsultantInformationProps = {
    onPageChange: Function;
    consultantName: string;
}

function ConsultantInformation(props: ConsultantInformationProps) {
    
    return (

        <form className="my-form">
            <button type="button" onClick={() => props.onPageChange('Allocation Board')}>Back</button>

            <div className="form-group" >
                <input type="text" name="name" placeholder ={props.consultantName} />
                <input type="text" name="title" placeholder ="Title" />
                <br />
                <br />
                <input type="text" name="email" placeholder ="Email" />
                <a href="">Resume</a>
                <br />
                <br />
                <input type="checkbox" id="SplitAllocation" name="SplitAllocation" value="Allocation1" />
                <label> Split Allocation </label>
                <br />

                <input type="text" name="client" placeholder ="Client" />
                <br />
                <br />
                <input type="checkbox" id="Tentative" name="Tentative" value="tentative1" />
                <label> Tentative </label>
                <input type="checkbox" id="LeadPoC" name="LeadPoC" value="leadPoc1" />
                <label> Lead/PoC </label>
                <br />
                <button type="button">Add Client</button>
                <button type="button">Remove Client</button>
                <br />
                <br />

                <textarea placeholder="Employee Skills"></textarea>
                <textarea placeholder="Notes"></textarea>
                <br />
                <br />
                <button type="button">Edit</button>
                <button type="button">Save and Close</button>
            </div>
        </form>
    )
}

ConsultantInformation.displayName = "ConsultantInformation";

export {
    ConsultantInformation
}