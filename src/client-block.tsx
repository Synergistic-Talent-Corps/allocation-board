import * as React from 'react';
import * as clientAllocations from './json/clientAllocations.json'

type ClientBlockProps = {
    clientName: string;
}
function ClientBlock(props: ClientBlockProps) {
    let clientArray: Array<string> = [];
    let allocationArray: Array<string> = [];


    clientAllocationMapping(props.clientName, allocationArray)

    return (
        <div className="clientblock">
            <a href="client.html">{props.clientName}</a>
            <ul>
                {allocationArray.map((value, index) => {
                    return <li key={index} style={{ color: value }}><a href="consultant.html">{value}</a></li>
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