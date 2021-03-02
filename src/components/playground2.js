import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));
    console.log(errors);

    return (
        <form className="playgroundClass" onSubmit={handleSubmit(onSubmit)}>
            <label>User Name: </label>
            <input type="text" placeholder="First name" name="First_name" ref={register({ required: true, maxLength: 80 })} />
            {errors.First_name?.type === "required" && <p className="errorClass"> Your input is required</p>}
            {errors.First_name?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(80)</p>}
            <label>Password: </label>
            <input type="text" placeholder="Last_name" name="Last_name" ref={register({ required: true, maxLength: 100 })} />
            {errors.Last_name?.type === "required" && <p className="errorClass"> Your input is required</p>}
            {errors.Last_name?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(100)</p>}
            <label>Email: </label>
            <input type="text" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
            {errors.Email?.type === "required" && <p className="errorClass"> Your input is required</p>}
            {errors.Email?.type === "maxLength" && "Your input exceed maxLength"}
            <label>Personal Site: </label>
            <input type="text" placeholder="Personal Site" name="Url" ref={register({ required: true, pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/ })} />
            {errors.Url?.type === "required" && <p className="errorClass"> Your input is required</p>}
            {errors.Url?.type === "pattern" && <p className="errorClass"> Only valid URL format is allowed.</p>}
            <label>Mobile Number: </label>
            <input type="tel" placeholder="Mobile_number" name="Mobile_number" ref={register({ required: true, minLength: 6, maxLength: 12, pattern: /^[0-9]*$/ })} />
            {errors.Mobile_number?.type === "required" && <p className="errorClass"> Your input is required</p>}
            {errors.Mobile_number?.type === "pattern" && <p className="errorClass"> Only numbers are allowed.</p>}
            {errors.Mobile_number?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(12)</p>}
            {errors.Mobile_number?.type === "minLength" && <p className="errorClass"> Your did not reached minLength(6)</p>}

            <label>Personal Title: </label>
            <select name="Title" ref={register({ required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>

            <label>Something about you: </label>
            <textarea placeholder="Something about you..." name="about" ref={register({ required: true, maxLength: 300 })} />
            {errors.about?.type === "required" && <p className="errorClass"> Your input is required</p>}
            {errors.about?.type === "maxLength" && <p className="errorClass"> Your input exceeds maxLength(300)</p>}
            <div className="DeveloperGroup">
                <label>Are you a Developer?</label>
                <br></br>
                <div>
                <label className="ExceptRadio">Y</label>
                <input name="Developer" type="radio" value="Yes" ref={register({ required: true })} />
                </div>
                <div>
                <label className="ExceptRadio">N</label>
                
                <input name="Developer" type="radio" value="No" ref={register({ required: true })} />
                </div>
                {errors.Developer?.type === "required" && <p className="errorClass"> Your input is required</p>}
            </div>
            <input type="submit" />
        </form>
    );
}