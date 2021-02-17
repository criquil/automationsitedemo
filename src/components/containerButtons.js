import React from 'react'
import LoginButton from './loginButton'
import LogoutButton from './logout';
const ContainerButtons = () => {
    return (
        <div className="profileClass">
                        <LoginButton />
                        <LogoutButton/>
        </div>
    )
}

export default ContainerButtons
