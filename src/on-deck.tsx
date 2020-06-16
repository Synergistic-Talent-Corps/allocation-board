import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'

type OnDeckProps = {
    onPageChange: Function;
    onClientChange: Function;
    onConsultantChange: Function;
}

function OnDeck(props: OnDeckProps) {
    let onDeckArray: Array<string> = [];

    OnDeckMapping(onDeckArray);
 
    return (
        <div className="ondeck">
            <p>On Deck</p>
            <ul>
                {onDeckArray.map((consultantName, index) => {
                    return <li key={index}><button onClick={() => {props.onPageChange('Consultant Information'); props.onConsultantChange(consultantName)}}>{consultantName}</button></li>
                })}
            </ul>
        </div>
    )
}

function OnDeckMapping(onDeckArray: Array<string>) {
    var obj = clientAllocations.clientAllocations

    obj.forEach(element => {
        if (element.clientName == "On Deck") { onDeckArray.push(element.employeeName) }
    });
    return onDeckArray;
}

OnDeck.displayName = "OnDeck";

export {
    OnDeck, OnDeckMapping
}