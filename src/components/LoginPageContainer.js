import React from 'react'
import LoginForm from './LogInForm'
import CreateUserForm from './CreateUserForm'

export default function LoginPageContainer(props) {
    return (
        <div className="login-page-div">
            <CreateUserForm />
            <LoginForm loginStatus={props.loginStatus} loginStatusUpdate={props.loginStatusUpdate}/>
        </div>
    )
}