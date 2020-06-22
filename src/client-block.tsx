import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'
import { CSSProperties } from "react";

type ClientBlockProps = {
    clientName: string;
    onPageChange: Function;
    onClientChange: Function;
    onConsultantChange: Function;
}

// object to store allocations from the json
interface Allocation {
    consultantName: string,
    clientName: string,
    clientStartDate: string,
    clientEndDate: string,
    teamLead: boolean,
    tentative: boolean,
    splitAllocation: boolean
};

// build a list of Allocations under the client
function clientAllocationMapping(Client: string, allocationArray2: Array<Allocation> ) {
    var obj = clientAllocations.clientAllocations

    obj.forEach(element => {
        if (element.clientName == Client) {
            let consultantAllocation = {} as Allocation;
            consultantAllocation.consultantName = element.employeeName;
            consultantAllocation.clientName = element.clientName;
            consultantAllocation.clientStartDate = element.clientStartDate;
            consultantAllocation.clientEndDate = element.clientEndDate;
            consultantAllocation.teamLead = element.teamLead;
            consultantAllocation.tentative = element.tentative;
            consultantAllocation.splitAllocation = element.splitAllocation;
            allocationArray2.push(consultantAllocation);
        }
    })
}

// check the end date for the consultant and return red if they are < 30 days from end date
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
    }
    
    return returnColor; 
}

function ClientBlock(props: ClientBlockProps) {

    let myStyleRed: CSSProperties = {
        background: 'red'
    }
    let myStyleGreen: CSSProperties = {
        background: '#76ee00' // green background
    }
    let myStyleOrange: CSSProperties = {
        background: 'orange'
    }
    let myStyleYellow: CSSProperties = {
        background: 'yellow'
    }

    let backgroundColor: string = "";

    // array of employees(consultants) under a certain client
    let allocationArray: Array<Allocation> = [];

    // load the array of consultants under the client
    clientAllocationMapping(props.clientName, allocationArray);

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