import * as React from 'react';

type HeaderProps = {
    text: string;
}

// useEffect runs after the component is rendered
//   if you return a function from useEffect, that function runs before the subsequent useEffect call

function Header(props: HeaderProps) {
    React.useEffect(() => {
        //alert(document.querySelector('#myFooter'));
    })

    return (
        <h1 id = "myHeader" className="primary-header">{props.text}</h1>
    )
}

Header.displayName = "Header";

export {
    Header
}