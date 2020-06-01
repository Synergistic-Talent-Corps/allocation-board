import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'
import { CSSProperties } from "react";
import { stringify } from 'querystring';

type ClientBlockProps = {
    clientName: string;
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

    console.log(props.clientName);

    return (
        <div className="clientblock">
            <h3><a href="client.html">{props.clientName}</a></h3>
            <ul>
                {allocationArray.map((employeeName, index) => {
                    
                    backgroundColor = consultantCloseToEndDate(props.clientName, employeeName);

                    if (backgroundColor == "red") {
                        return <li key={index} style = {myStyleRed}><a href="consultant.html">{employeeName}</a></li>
                    } else {
                        return <li key={index} style = {myStyleGreen}><a href="consultant.html">{employeeName}</a></li>
                    }
                })}
            </ul>
        </div>
    )
}

function clientAllocationMapping(Client: string, allocationArray: Array<string> ) {
    var obj = clientAllocations.clientAllocations

    obj.forEach(element => {
        if (element.clientName == Client) {
            allocationArray.push(element.employeeName);
        }
    })

    return allocationArray
}

function returnString () : string {
    return "red";
}

function consultantCloseToEndDate(clientName: string, employeeName: string): string {
    var obj = clientAllocations.clientAllocations
    let currentDate: Date = new Date();
    let endDate: Date = new Date();
    let returnColor: string = "green";
    
    obj.forEach(element => {
        if (element.clientName == clientName) {
            if (element.employeeName == employeeName) {
                endDate = new Date(element.clientEndDate);
                if((+endDate - 2629746000) < +currentDate) { // end date - milliseconds in a month
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