import * as React from 'react';
import { useState, useEffect} from 'react';
import { Allocation } from './client-block'

type OnDeckProps = {
    onPageChange: Function;
    onClientChange: Function;
    onConsultantChange: Function;
}

// component function
function OnDeck(props: OnDeckProps) {

    // array of consultants under the On Deck
    let onDeckArray: Array<Allocation> = [];

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
    
    // load the array of allocations for On Deck
    allocations.forEach((allocation: Allocation) => {
        if (allocation.clientName == 'On Deck') {
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
                    return <li key={index}><button onClick={() => {props.onPageChange('Consultant Information'); props.onConsultantChange(allocation.consultantName)}}>{allocation.consultantName}</button></li>
                })}
            </ul>
        </div>
    )
}

OnDeck.displayName = "OnDeck";

export {
    OnDeck
}