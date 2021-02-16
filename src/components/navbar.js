import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loginButton'
const navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="?">Cristian's test site</a>
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <ul id="navbar-intest" class="nav navbar-nav">
                            <li><a href="playground.html">Testing Forms Playground</a></li>
                        </ul>
                        <LoginButton />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
