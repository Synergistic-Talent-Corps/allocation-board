import * as React from 'react';
import { useContext } from 'react';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Allocation, AllocationsContext } from './store';

// component function
function OnDeck() {

    // access the AllocationsContext in store
    const storeAllocations: Array<Allocation> = useContext(AllocationsContext);

    let myStyleLink: CSSProperties = { color: 'black' };

    // array of consultants under the On Deck
    let onDeckArray: Array<Allocation> = [];

    // load the array of allocations for On Deck
    storeAllocations.forEach((allocation: Allocation) => {
        if (allocation.clientName === 'On Deck') {
            let consultantAllocation = {} as Allocation;
            consultantAllocation.consultantName = allocation.consultantName;
            consultantAllocation.clientName = allocation.clientName;
            consultantAllocation.clientStartDate = allocation.clientStartDate;
            consultantAllocation.clientEndDate = allocation.clientEndDate;
            consultantAllocation.teamLead = allocation.teamLead;
            consultantAllocation.tentative = allocation.tentative;
            consultantAllocation.splitAllocation = allocation.splitAllocation;
            onDeckArray.push(consultantAllocation);
        }
    })

    return (
        <div className="ondeck">
            <p>On Deck</p>
            <ul>
                {onDeckArray.map((allocation, index) => {
                    return <li key={index}><Link style = {myStyleLink} to={`/consultant/${allocation.consultantName}`}>{allocation.consultantName}</Link></li>
                })}
            </ul>
        </div>
    )
}

OnDeck.displayName = "OnDeck";

export {
    OnDeck
}