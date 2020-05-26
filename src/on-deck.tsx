import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'

function OnDeck() {
    let onDeckArray: Array<string> = [];

    OnDeckMapping(onDeckArray);
 
    return (
        <div className="ondeck">
            <p>On-Deck</p>
            <ul>
                {onDeckArray.map((value, index) => {
                    return <li key={index} style={{ color: value }}><a href="consultant.html">{value}</a></li>
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