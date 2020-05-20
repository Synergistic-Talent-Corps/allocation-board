import * as React from 'react';
import { render } from 'react-dom';

type ClientBlockProps = {
    clientName : string;
    clientBlock : Array<string>
}

function ClientBlock(props: ClientBlockProps) {
    return (
        <div className="clientblock">
            <a href="client.html">{props.clientName}</a>
            <ul>
                {props.clientBlock.map((value, index) => {
                    return <li key={index} style={{ color: value}}><a href="consultant.html">{value}</a></li>
                })}
            </ul>
        </div>
    )
}

ClientBlock.displayName = "ClientBlock";

export {
    ClientBlock
}