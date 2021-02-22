import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import IsLoading from "./isLoading"
const WelcomePage = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) return <div><IsLoading/></div>
    else if (isAuthenticated) {
        return (
            <div>
                <section className="container">
                    Welcome!
                </section>

            </div>
        )
    } else {
        return (

            <div onLoadStart={() => loginWithRedirect()}>
                <br></br>

                <h1 id="notLoggedTitleTXT">Welcome to my Atomation Testing Site</h1>
                <h3 id="notLoggedScreen">Please click Login button to log into the application or sign up!</h3>
            </div>
        )
    }



}

export default WelcomePage
