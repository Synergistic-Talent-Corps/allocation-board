import * as React from 'react';
import { render } from 'react-dom';

type OnDeckProps = {
    onDeck : Array<string>
}

function OnDeck(props: OnDeckProps) {
    return (
        <div className="ondeck"> 
            <p>On-Deck</p>
            <ul>
                {props.onDeck.map((value, index) => {
                    return <li key={index} style={{ color: value}}><a href="consultant.html">{value}</a></li>
                })}
            </ul>
        </div>
    )
}

OnDeck.displayName = "OnDeck";

export {
    OnDeck
}