import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event';
import JSONPretty from 'react-json-pretty';
import LoginButton from './loginButton'
import LogoutButton from './logout';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated &&(
        <div className="profileClass" id="profileAREA">                     
          <img src={user.picture} alt={user.name} id="profileIMG" />
          <p id="profileTXT">Welcome {user.nickname} !</p>
        </div>
        )
    )
}

export default Profile
