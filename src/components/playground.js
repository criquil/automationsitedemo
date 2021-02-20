import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const PlayGround = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return (
            <div>
                <section className="container">

                    <div className="playgroundClass">
                        <header>
                            <h2>HTML form elements to interact with.</h2>
                        </header>
                        <section>
                            <h1 class="other-class">Forms Elements</h1>
                            <form id="myForm" method="POST" onsubmit="submit()">
                                <legend>Enter Your Data</legend>
                                <div>
                                    <label>User Name</label>
                                    <input type="text" />
                                    <p class="test-class">Helper text if necessary.</p>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type="password" />
                                    <p class="test-class">Error messages when appropriate.</p>
                                </div>
                                <div>
                                    <label for="first-name">First Name</label>
                                    <input type="text" id="first-name" />
                                </div>

                                <div>
                                    <label for="last-name">Last Name</label>
                                    <input type="text" id="last-name" />
                                </div>

                                <div>
                                    <label for="email">Email</label>
                                    <input type="email" id="email" />
                                </div>
                                <div>
                                    <label for="gender">Gender</label>
                                    <select>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <p>Please select your age:</p>

                                    <label for="age1"><input type="radio" id="age1" name="age" value="30" />0 - 30</label>
                                    <br></br>
                                    <label for="age2"><input type="radio" id="age2" name="age" value="60" />31 - 60</label>
                                    <br></br>
                                    <label for="age3"><input type="radio" id="age3" name="age" value="100" />61 - 100</label>
                                    <br></br><br></br> <br></br>
                                </div>
                                <div>
                                    <label for="url">Personal Site URL</label>
                                    <input type="url" placeholder="https://mysite.com" />
                                </div>

                                <div>
                                    <label>Something about you:</label>
                                    <textarea></textarea>
                                </div>

                                <div>
                                    <label><input type="checkbox" /> Married?</label>
                                </div>

                                <div>
                                    <input type="button" value="Save and Return" onclick="submit()" />
                                </div>
                            </form>
                        </section>
                    </div>
    )
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

export default PlayGround
