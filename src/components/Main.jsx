import React from 'react'

const Main = () => {
    const [state, setState] = React.useState({
        isLoading: true,
        error: null,
        data: null
    });
    return (
        <div>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', padding: 0 }}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <h1>Main Page</h1>
        </div>
    )
}

export default Main
