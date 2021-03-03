import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import IsLoading from "./isLoading"
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const PlayGround = () => {
    let history = useHistory();
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { isLoading } = useAuth0();
    const { register, handleSubmit, errors } = useForm();
  
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = data => { 
        localStorage.setItem('myData', JSON.stringify(data));
        history.push("/result/");

    
    }//alert(JSON.stringify(data));
  //  console.log(errors);
    
    


    if (isLoading) return <div><IsLoading /></div>
    else if (isAuthenticated) {
        return (
            <div>
                <form  className="playgroundClass" onSubmit = {handleSubmit(onSubmit)}>
                    <label id="LBLUser">First Name: </label>
                    <input id="TXTUser" type="text" placeholder="First name" name="First_name" ref={register({ required: true, maxLength: 100 })} />

                    {errors.First_name?.type === "required" && <p className="errorClass"> Your input is required</p>}
                    {errors.First_name?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(100)</p>}

                    <label id="LBLPass">Last Name: </label>
                    <input id="TXTPass" type="text" placeholder="Last name" name="Last_name" ref={register({ required: true, maxLength: 100 })} />

                    {errors.Last_name?.type === "required" && <p className="errorClass"> Your input is required</p>}
                    {errors.Last_name?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(100)</p>}

                    <label id="LBLNick">Nickname: </label>
                    <input id="TXTNick" type="text" placeholder="Nick name" name="Nick_name" ref={register({ required: true, maxLength: 100 })} />

                    {errors.Nick_name?.type === "required" && <p className="errorClass"> Your input is required</p>}
                    {errors.Nick_name?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(100)</p>}
                    
                    <label id="LBLEmail">Email: </label>
                    <input id="TXTEmail" type="text" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />

                    {errors.Email?.type === "required" && <p className="errorClass"> Your input is required</p>}
                    {errors.Email?.type === "maxLength" && "Your input exceed maxLength"}

                    <label id="LBLUrl">Personal Site: </label>
                    <input id="TXTUrl" type="text" placeholder="Personal Site" name="Url" ref={register({ required: true, pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/ })} />

                    {errors.Url?.type === "required" && <p className="errorClass"> Your input is required</p>}
                    {errors.Url?.type === "pattern" && <p className="errorClass"> Only valid URL format is allowed.</p>}

                    <label id="LBLMobile">Mobile Number: </label>
                    <input id="TXTMobile" type="tel" placeholder="Mobile number" name="Mobile_number" ref={register({ required: true, minLength: 6, maxLength: 12, pattern: /^[0-9]*$/ })} />

                    {errors.Mobile_number?.type === "required" && <p className="errorClass"> Your input is required</p>}
                    {errors.Mobile_number?.type === "pattern" && <p className="errorClass"> Only numbers are allowed.</p>}
                    {errors.Mobile_number?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(12)</p>}
                    {errors.Mobile_number?.type === "minLength" && <p className="errorClass"> Your did not reached minLength(6)</p>}

                    <label id="LBLTitle">Personal Title: </label>
                    <select id="SELTitle" name="Title" ref={register({ required: true })}>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Miss">Miss.</option>
                        <option value="Dr">Dr.</option>
                    </select>

                    <label id="LBLAbout">Something about you: </label>
                    <textarea id="TXTAbout" placeholder="Something about you..." name="about" ref={register({ required: true, maxLength: 300 })} />
                    {errors.about?.type === "required" && <p className="errorClass"> Your input is required</p>}
                    {errors.about?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(300)</p>}
                    <div className="DeveloperGroup">
                        <label>Are you a Developer?</label>
                        <br></br>
                        <div>
                            <label id="LBLDevYes" className="ExceptRadio">Y</label>
                            <input id="RADButDevYes" name="Developer" type="radio" value="Si" ref={register({ required: true })} />
                        </div>
                        <div>
                            <label id="LBLDevNo" className="ExceptRadio">N</label>

                            <input id="RADButDevNo" name="Developer" type="radio" value="No" ref={register({ required: true })} />
                        </div>
                        {errors.Developer?.type === "required" && <p className="errorClass"> Your input is required</p>}
                    </div>
                    <input id="BTNSubmit" type="submit" />
                </form>
            </div>
        )

    } else {
        return (

            <div onLoadStart={() => loginWithRedirect()}>
                <br></br>

                <h1 id="notLoggedTitleTXT">Welcome to my Automation Testing Site</h1>
                <h3 id="notLoggedScreen">Please click Login button to log into the application or sign up!</h3>
            </div>
        )
    }
}

export default PlayGround
