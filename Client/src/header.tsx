import * as React from 'react';

type HeaderProps = {
    text: string;
}

// component function
function Header(props: HeaderProps) {
    return (
        <h1 id = "myHeader" className="primary-header">{props.text}</h1>
    )
}

Header.displayName = "Header";

export {
    Header
}