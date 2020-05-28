import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'
import { CSSProperties } from "react";


const myStyles: CSSProperties = {
  background: 'green'
}

{/* <div style={myStyles} /> */}

type ClientBlockProps = {
    clientName: string;
}

function ClientBlock(props: ClientBlockProps) {
    let allocationArray: Array<string> = [];

    clientAllocationMapping(props.clientName, allocationArray)

    return (
        <div className="clientblock">
            <div className="clientblock-header"><a href="client.html">{props.clientName}</a></div>
            <ul>
                {allocationArray.map((employeeName, index) => {
                    return <li key={index} style = {myStyles}><a href="consultant.html">{employeeName}</a></li>
                })}
            </ul>
        </div>
    )
}


function clientAllocationMapping(Client: string, allocationArray: Array<string> ) {
    var obj = clientAllocations.clientAllocations

    obj.forEach(element => {
        if (element.clientName == Client) {
            allocationArray.push(element.employeeName)
        }
    })

    return allocationArray
}

ClientBlock.displayName = "ClientBlock";

export {
    ClientBlock
}