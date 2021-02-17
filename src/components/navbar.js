import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ContainerButtons from "./containerButtons"
import Profile from './profile';
const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Cristian's test site</a>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul id="navbar-intest" className="nav navbar-nav">
                            <li><a href="">Testing Forms Playground</a></li>
                        </ul>
                        <>
                        <>
                        <Profile />
                        <br></br>
                        <br></br>
                        <br></br>
                        <ContainerButtons/>
                        </>                       
                        </>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
