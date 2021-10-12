import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Props inside the components:
export default function Navbar(props) {
    const setActive = (item) => {
        const navClasses = document.getElementsByClassName('nav-link');
        const selected = document.getElementById(item);
        for (let i = 0; i < navClasses.length; i++) {
            if (navClasses[i] === selected)
                navClasses[i].classList.add('active');
            else
                navClasses[i].classList.remove('active');
        }
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link id={props.navElement1} className="nav-link" aria-current="page" to="/" onClick={() => { setActive(props.navElement1) }}>{props.navElement1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link id={props.navElement2} className="nav-link" to="/about" onClick={() => { setActive(props.navElement2) }}>{props.navElement2}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="form-check form-switch mx-2">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle} />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{`${props.mode === 'light' ? 'Light' : 'Dark'}`}</label>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    navElement1: PropTypes.string,
    navElement2: PropTypes.string
}

//Default Props:
Navbar.defaultProps = {
    navElement1: "Home",
    navElement2: "About"
}