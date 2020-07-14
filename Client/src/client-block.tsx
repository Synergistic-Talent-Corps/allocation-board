import * as React from 'react';
import { useContext } from 'react';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Allocation, AllocationsContext } from './store';

type ClientBlockProps = {
    clientName: string;
}

// check the end date for the consultant and return a color
function consultantCloseToEndDate(clientEndDate: string): string {
    let currentDate: Date = new Date();
    let endDate: Date = new Date(clientEndDate);
    let returnColor: string = "#76ee00"; // default the color to green
    
    if (clientEndDate === "") {
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
    let myStyleLink: CSSProperties = { color: 'black' };
    let myStyleRed: CSSProperties = { background: 'red', color: 'black' };
    let myStyleGreen: CSSProperties = { background: '#76ee00', color: 'black' }; // green background
    let myStyleOrange: CSSProperties = { background: 'orange', color: 'black' };
    let myStyleYellow: CSSProperties = { background: 'yellow', color: 'black' };

    let backgroundColor: string = "";
    
    // access the AllocationsContext in store
    const storeAllocations: Array<Allocation> = useContext(AllocationsContext);

    // array of consultants under the client specified in props
    let allocationArray: Array<Allocation> = [];


    // load the array of allocations for the specified client
    storeAllocations.forEach((allocation: Allocation) => {
        if (allocation.clientName === props.clientName) {
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
            <p><Link style = {myStyleLink} to={`/client/${props.clientName}`}>{props.clientName}</Link></p>
            <ul>

            {allocationArray.map((allocation, index) => {
                backgroundColor = consultantCloseToEndDate(allocation.clientEndDate);

                if (allocation.tentative === true) {
                    return <li key={index} style={myStyleOrange}><Link style={myStyleLink} to={`/consultant/${allocation.consultantName}`}>{allocation.consultantName}</Link></li>
                } else if (backgroundColor === "#76ee00") {
                    return <li key={index} style={myStyleGreen}><Link style={myStyleLink} to={`/consultant/${allocation.consultantName}`}>{allocation.consultantName}</Link></li>
                } else if (backgroundColor === "yellow") {
                    return <li key={index} style={myStyleYellow}><Link style={myStyleLink} to={`/consultant/${allocation.consultantName}`}>{allocation.consultantName}</Link></li>
                } else if (backgroundColor === "red") {
                    return <li key={index} style={myStyleRed}><Link style={myStyleLink} to={`/consultant/${allocation.consultantName}`}>{allocation.consultantName}</Link></li>
            }})}
            </ul>
        </div>
    )
}

ClientBlock.displayName = "ClientBlock";

export {
    ClientBlock
}