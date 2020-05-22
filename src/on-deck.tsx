import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'

type OnDeckProps = {
    onDeckArray: Array<string>
}

function OnDeck(props: OnDeckProps) {
    return (
        <div className="ondeck">
            <p>On-Deck</p>
            <ul>
                {props.onDeckArray.map((value, index) => {
                    return <li key={index} style={{ color: value }}><a href="consultant.html">{value}</a></li>
                })}
            </ul>
        </div>
    )
}

interface MappedArray {
    MappedArray: string[];
}

function OnDeckMapping() {
    var obj = clientAllocations.clientAllocations
    var onDeckEmployeeArray: Array<string> = []

    obj.forEach(element => {
        if (element.clientName == "On Deck") { onDeckEmployeeArray.push(element.employeeName) }
    });
    return onDeckEmployeeArray;
}

OnDeck.displayName = "OnDeck";

export {
    OnDeck, OnDeckMapping
}