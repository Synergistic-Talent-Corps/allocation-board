import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// object to store consultant information
interface Consultant {
    consultantName: string,
    title: string,
    email: string,
    splitAllocation: string,
    consultantSkills: string,
    consultantNotes: string
}

// component function
function ConsultantInformation() {

    // get the consultantName from useParams
    const { consultantName } = useParams();

    let currentConsultant = {} as Consultant;

    // state to hold all of the consultants
    const [consultants, setConsultants] = useState<Consultant[]>([]);

    // fetch the consultants using an api call
    async function fetchConsultants() {
        const response = await fetch("http://localhost:5000/api/consultants");

        let data = await response.json();
    
        // set the state for consultants
        setConsultants(data.consultants);
    }

    useEffect(() => { fetchConsultants(); }, []);
    
    // find the current consultant
    consultants.forEach((consultant: Consultant) => {
        if (consultant.consultantName === consultantName) {
            currentConsultant.consultantName = consultant.consultantName;
            currentConsultant.title = consultant.title;
            currentConsultant.email = consultant.email;
            currentConsultant.splitAllocation = consultant.splitAllocation;
            currentConsultant.consultantSkills = consultant.consultantSkills;
            currentConsultant.consultantNotes = consultant.consultantNotes;
        }
    })

    return (

        <form className="my-form">
            <div className="form-group" >
                <input type="text" name="name" placeholder="Name" value={currentConsultant.consultantName} />
                <input type="text" name="title" placeholder="Title" value={currentConsultant.title} />
                <br />
                <br />
                <input type="text" name="email" placeholder="Email" value={currentConsultant.email} />
                {/* <a href="">Resume</a> */}
                <br />
                <br />
                <input type="checkbox" id="SplitAllocation" name="SplitAllocation" value={currentConsultant.splitAllocation} />
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

                <textarea placeholder="Employee Skills" value={currentConsultant.consultantSkills}></textarea>
                <textarea placeholder="Notes" value={currentConsultant.consultantNotes}></textarea>
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