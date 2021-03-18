import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Authenticated = ({children}) => {
    const  { loginWithRedirect, isAuthenticated } = useAuth0();  
    if (isAuthenticated) {
    return (
        <div id="Auth">
            {children}
        </div>
    )
    }
    else
    {
        return (
            <div id="NoAuth" >

                <h1 id="notLoggedTitleTXT">Welcome to my Atomation Testing Site</h1>
                <h3 id="notLoggedScreen">Please click Login button to log into the application or sign up#########################!</h3>
                </div>
        )
    }
}

export default Authenticated