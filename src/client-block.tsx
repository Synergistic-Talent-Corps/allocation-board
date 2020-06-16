import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'
import { CSSProperties } from "react";

type ClientBlockProps = {
    clientName: string;
    onPageChange: Function;
    onClientChange: Function;
    onConsultantChange: Function;
}

function ClientBlock(props: ClientBlockProps) {

    let myStyleRed: CSSProperties = {
        background: 'red'
    }
    let myStyleGreen: CSSProperties = {
        background: '#76ee00' // green background
    }

    let backgroundColor: string = "";

    // array of employee(consultant) names
    let allocationArray: Array<string> = [];

    // load the array of consultants under the client
    clientAllocationMapping(props.clientName, allocationArray)

    return (
        <div className="clientblock">
            <h3><button onClick={() => {props.onPageChange('Client Information'); props.onClientChange(props.clientName)}}>{props.clientName}</button></h3>
            <ul>
                {allocationArray.map((consultantName, index) => {
                    
                    backgroundColor = consultantCloseToEndDate(props.clientName, consultantName);

                    if (backgroundColor == "red") {
                        return <li key={index} style = {myStyleRed}><button style = {myStyleRed} onClick={() => {props.onPageChange('Consultant Information'); props.onConsultantChange(consultantName)}}>{consultantName}</button></li>
                    } else {
                        return <li key={index} style = {myStyleGreen}><button style = {myStyleGreen} onClick={() => {props.onPageChange('Consultant Information'); props.onConsultantChange(consultantName)}}>{consultantName}</button></li>
                    };
                })}
            </ul>
        </div>
    )
}

// build a list of consultants under the client
function clientAllocationMapping(Client: string, allocationArray: Array<string> ) {
    var obj = clientAllocations.clientAllocations

    obj.forEach(element => {
        if (element.clientName == Client) {
            allocationArray.push(element.employeeName);
        }
    })

    return allocationArray
}

// check the end date for the consultant and return red if they are < 30 days from end date
function consultantCloseToEndDate(clientName: string, consultantName: string): string {
    var obj = clientAllocations.clientAllocations
    let currentDate: Date = new Date();
    let endDate: Date = new Date();
    let returnColor: string = "#76ee00";
    
    obj.forEach(element => {
        if (element.clientName == clientName) {
            if (element.employeeName == consultantName) {
                endDate = new Date(element.clientEndDate);
                if (element.clientEndDate == "") {
                    returnColor = "#76ee00"; //end date is blank, so leave returnColor set to green
                } else if ((+endDate - 2629746000) < +currentDate) { // end date - milliseconds in a month
                    returnColor = "red";
                };
            };
        };
    });
    return returnColor; 
}

ClientBlock.displayName = "ClientBlock";

export {
    ClientBlock
}