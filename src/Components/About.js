import React from 'react'
import './About.css';

export default function About(props) {
    const btnStyle = props.mode === 'light' ? {
        backgroundColor: 'black',
        color: 'white'
    } : {
        backgroundColor: 'white',
        color: 'black'
    };

    const toggleStyle = props.mode === 'light' ? {
        backgroundColor: 'white',
        color: 'black'
    } : {
        backgroundColor: 'black',
        color: 'white'
    };

    return (
        <>
            <div className="about-section" style={toggleStyle}>
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <div className="about my-3" style={{ contain: 'content' }}>
                <h1 style={{ textAlign: 'center', color: props.mode === 'dark' ? 'white' : 'black' }}>Our Team</h1>
                <div className="row">
                    <div className="column">
                        <div className="card" style={toggleStyle}>
                            <div className="container">
                                <h3>Tushar Bharti</h3>
                                <p className="title">CEO & Founder</p>
                                <p>"My first ever React App"</p>
                                <p>tbharti2001@gmail.com</p>
                                <p><button className="button" style={btnStyle}>Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card" style={toggleStyle}>
                            <div className="container">
                                <h3>Pluto</h3>
                                <p className="title">Art Director</p>
                                <p>"Woof woof!"</p>
                                <p>pluto@plutoarts.com</p>
                                <p><button className="button" style={btnStyle}>Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card" style={toggleStyle}>
                            <div className="container">
                                <h3>Bushar Tharti</h3>
                                <p className="title">Co Founder</p>
                                <p>"I should've been the CEO."</p>
                                <p>bushartharti@blahblah.com</p>
                                <p><button className="button" style={btnStyle}>Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
