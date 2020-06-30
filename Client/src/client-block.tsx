import * as React from 'react';
import { useEffect, useState } from 'react';
import { CSSProperties } from 'react';

type ClientBlockProps = {
    clientName: string;
    onPageChange: Function;
    onClientChange: Function;
    onConsultantChange: Function;
}

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

// check the end date for the consultant and return a color
function consultantCloseToEndDate(clientEndDate: string): string {
    let currentDate: Date = new Date();
    let endDate: Date = new Date(clientEndDate);
    let returnColor: string = "#76ee00"; // default the color to green
    
    if (clientEndDate == "") {
        returnColor = "#76ee00"; //end date is blank, so leave returnColor set to green
    } else if ((+endDate) < +currentDate) {
        returnColor = "red";
    } else if ((+endDate - 2629746000) < +currentDate) { // end date - milliseconds in a month
        returnColor = "yellow";
    };
    
    return returnColor; 
}

// component function
function ClientBlock(props: ClientBlockProps) {

    // styles for the consultants to set the background color
    let myStyleRed: CSSProperties = { background: 'red' };
    let myStyleGreen: CSSProperties = { background: '#76ee00' }; // green background
    let myStyleOrange: CSSProperties = { background: 'orange' };
    let myStyleYellow: CSSProperties = { background: 'yellow' };
    let backgroundColor: string = "";

    // array of consultants under the client specified in props
    let allocationArray: Array<Allocation> = [];

    // state to hold all of the allocations
    const [allocations, setAllocations] = useState<Allocation[]>([]);

    // fetch the allocations using an api call
    async function fetchAllocations() {
        const response = await fetch("http://localhost:5000/api/allocations");

        let data = await response.json();
    
        // set the state for allocations
        setAllocations(data.clientAllocations);
    }

    useEffect(() => { fetchAllocations(); }, []);
    
    // load the array of allocations for the specified client
    allocations.forEach((allocation: Allocation) => {
        if (allocation.clientName == props.clientName) {
            let consultantAllocation = {} as Allocation;
            consultantAllocation.consultantName = allocation.consultantName;
            consultantAllocation.clientName = allocation.clientName;
            consultantAllocation.clientStartDate = allocation.clientStartDate;
            consultantAllocation.clientEndDate = allocation.clientEndDate;
            consultantAllocation.teamLead = allocation.teamLead;
            consultantAllocation.tentative = allocation.tentative;
            consultantAllocation.splitAllocation = allocation.splitAllocation;
            allocationArray.push(consultantAllocation);
        }
    })

    return (
        <div className="clientblock">
            <h3><button onClick={() => {props.onPageChange('Client Information'); props.onClientChange(props.clientName)}}>{props.clientName}</button></h3>
            <ul>

            {allocationArray.map((allocation, index) => {
                backgroundColor = consultantCloseToEndDate(allocation.clientEndDate);

                if (allocation.tentative == true) {
                    return <li key={index} style = {myStyleOrange}><button style = {myStyleOrange} onClick={() => {props.onPageChange('Consultant Information'); props.onConsultantChange(allocation.consultantName)}}>{allocation.consultantName}</button></li>
                } else if (backgroundColor == "#76ee00") {
                    return <li key={index} style = {myStyleGreen}><button style = {myStyleGreen} onClick={() => {props.onPageChange('Consultant Information'); props.onConsultantChange(allocation.consultantName)}}>{allocation.consultantName}</button></li>
                } else if (backgroundColor == "yellow") {
                    return <li key={index} style = {myStyleYellow}><button style = {myStyleYellow} onClick={() => {props.onPageChange('Consultant Information'); props.onConsultantChange(allocation.consultantName)}}>{allocation.consultantName}</button></li>
                } else if (backgroundColor == "red") {
                    return <li key={index} style = {myStyleRed}><button style = {myStyleRed} onClick={() => {props.onPageChange('Consultant Information'); props.onConsultantChange(allocation.consultantName)}}>{allocation.consultantName}</button></li>
            }})}
            </ul>
        </div>
    )
}

ClientBlock.displayName = "ClientBlock";

export {
    ClientBlock
}