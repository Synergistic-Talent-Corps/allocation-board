import * as React from 'react';

type FooterProps = {
    text: string;
}

// component function
function Footer(props: FooterProps) {
    React.useEffect(() => {
        //alert(document.querySelector('#myFooter'));
    })

    return (
        <p id = "myFooter" className="primary-footer">{props.text}</p>
    )
}

Footer.displayName = "Footer";

export {
    Footer
}