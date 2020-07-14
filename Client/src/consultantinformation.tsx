import * as React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { InputFloatLeft, InputRight, TextArea, ButtonLeft, ButtonRight, Form, DivSubForm } from './ui/styledcomponents'
import { Consultant, ConsultantsContext } from './store';

// component function
function ConsultantInformation() {

    // access the ConsultantsContext in store
    const storeConsultants: Array<Consultant> = useContext(ConsultantsContext);

    // get the consultantName that was passed in on the route from useParams
    const { consultantName } = useParams();

    let currentConsultant = {} as Consultant;

    // find the current consultant
    storeConsultants.forEach((consultant: Consultant) => {
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
        <Form>
            <div>
                <InputFloatLeft type="text" name="name" placeholder={currentConsultant.consultantName} />
                <InputRight type="text" name="title" placeholder={currentConsultant.title} />
                <br />
                <br />
                <InputFloatLeft type="text" name="email" placeholder={currentConsultant.email} />
                <a href="">Resume</a>
                <br />
                <input type="checkbox" id="SplitAllocation" name="SplitAllocation" value={currentConsultant.splitAllocation} />
                <label> Split Allocation </label>
                <br />
                <br />
                <DivSubForm>
                    <InputFloatLeft type="text" name="client" placeholder ="Client" />
                    <br />
                    <input type="checkbox" id="Tentative" name="Tentative" value="tentative1" />
                    <label> Tentative </label>
                    <input type="checkbox" id="LeadPoC" name="LeadPoC" value="leadPoc1" />
                    <label> Lead/PoC </label>
                    <br />
                    <br />
                    <ButtonLeft type="button">Add Client</ButtonLeft>
                    <ButtonRight type="button">Remove Client</ButtonRight>
                </DivSubForm>
                <br />
                <TextArea rows={5} placeholder={currentConsultant.consultantSkills} />
                <br />
                <br />
                <TextArea rows={5} placeholder={currentConsultant.consultantNotes} />
                <br />
                <br />
                <ButtonLeft type="button">Edit</ButtonLeft>
                <ButtonRight type="button">Save and Close</ButtonRight>
            </div>
        </Form>
    )
}

ConsultantInformation.displayName = "ConsultantInformation";

export {
    ConsultantInformation
}