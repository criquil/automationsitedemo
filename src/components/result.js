import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import IsLoading from "./isLoading"
const ResultData = () => {
    const rnd = (min,max) => { return Math.floor(Math.random() * (max - min + 1) + min) };
    const min = 10;
const max = 99;
const intNumber = Math.floor(Math.random() * (max - min)) + min;
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    var datos = JSON.parse(localStorage.getItem('myData'));


    if (isLoading) return <div><IsLoading /></div>
    else if (isAuthenticated) {
        return (
            <div>
                <section className="container">
                    <h1 id="ResultHeader">Form Data Validation</h1>

                    <div>
                            <span id="Texto" className="parrafo">
                                Se llama <span id="Title">{datos.Title}</span> <span id="FirstName">{datos.First_name}</span> <span id="LastName">{datos.Last_name}</span>
                                . Tambien se le conoce como <span id="NickName">{datos.Nick_name}.</span>
                                                        <br></br>
                                Afirma que <span id="Developer">{datos.Developer.toLowerCase()}</span> es Software Developer.
                                <br></br>
                                Para contactarle, simplemente llame al: <span id="Mobile">{datos.Mobile_number}{intNumber}</span>, o escríbale a su casilla de eMail: <span id="Email">{datos.Email}</span> .
                                <br></br>
                                Si quieres conocerle mas, nos cuenta lo siguiente: <span id="About">{datos.about.substring(0, 5)}</span>.<br></br>
                                O bien lee su Bio en su <a id="Url" href={datos.Url}>{datos.Url}</a>.


                            </span></div>



                </section>

            </div>
        )
    } else {
        return (

            <div onLoadStart={() => loginWithRedirect()}>
                <br></br>

                <h1 id="notLoggedTitleTXT">Welcome to my Atomation Testing Siteasdaaaa</h1>
                <h3 id="notLoggedScreen">Please click Login button to log into the application or sign up!</h3>
            </div>
        )
    }



}

export default ResultData
