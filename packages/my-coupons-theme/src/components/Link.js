import React from 'react'
import connect from '@frontity/connect'

const Link = ({ href, actions, children }) => {
    return (
        <a href={href}
            onClick={envent => {
                envent.preventDefault();
                actions.router.set(href);
            }}
        >
            {children}
        </a>

    )
}
export default connect(Link)