import React from 'react';

function ExternalLink({ href, button, children }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            style={ button ? {textDecoration: 'none'} : null}
        >
            {children}
        </a>
    );
}

export default ExternalLink;
