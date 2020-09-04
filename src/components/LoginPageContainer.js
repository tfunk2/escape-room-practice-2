import React from 'react'
import LoginForm from './LogInForm'
import CreateUserForm from './CreateUserForm'
import LootPuzzleLogo from '../images/LootPuzzleLogo3.png'

export default function LoginPageContainer(props) {
    
    return (
        <div className="login-page-div">
            <div id="logo-div">
                <img 
                    alt="logo" 
                    className="animated rotateIn delay-1s" 
                    id="main-logo" 
                    src={LootPuzzleLogo}
                >
                </img>
            </div>
            <div id="forms-div">
                <LoginForm 
                    usernameState={props.usernameState} 
                    passwordState={props.passwordState} 
                    handleChange={props.handleChange} 
                    loginStatus={props.loginStatus} 
                    loginStatusUpdate={props.loginStatusUpdate}
                    resetPasswordAfterLogin={props.resetPasswordAfterLogin}
                />
                <CreateUserForm />
            </div>
            <div id="title-div">
                <h1 className="title animated fadeInLeft delay-2s">Loot</h1>
                <h1 id="bottom-title" className="title animated fadeInRight delay-3s">Puzzle</h1>
            </div>
        </div>
    )
}