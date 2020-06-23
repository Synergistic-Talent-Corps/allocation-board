import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'

type ConsultantInformationProps = {
    onPageChange: Function;
    consultantName: string;
}

// object to store consultant information from the json
interface ConsultantInfo {
    consultantName: string,
    title: string,
    email: string
}

// get the consultant information
function getConsultantInfo(Consultant: string, consultantInfo: ConsultantInfo) {
    var obj = clientAllocations.consultants;

    obj.forEach(element => {
        if (element.consultantName == Consultant) {
            consultantInfo.consultantName = element.consultantName;
            consultantInfo.title = element.title;
            consultantInfo.email = element.email;
        }
    })
}


function ConsultantInformation(props: ConsultantInformationProps) {
    var obj = clientAllocations.consultants;
    let consultantInfo = {} as ConsultantInfo;

    getConsultantInfo(props.consultantName, consultantInfo);
    
    return (

        <form className="my-form">
            <button type="button" onClick={() => props.onPageChange('Allocation Board')}>Back</button>

            <div className="form-group" >
                <input type="text" name="name" placeholder ={consultantInfo.consultantName} />
                <input type="text" name="title" placeholder ={consultantInfo.title} />
                <br />
                <br />
                <input type="text" name="email" placeholder ={consultantInfo.email} />
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