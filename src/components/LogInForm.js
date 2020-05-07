import React from 'react'

export default function LogInForm(props) {
    

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.removeItem("token")
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                    username: props.usernameState,
                    password: props.passwordState
            })
        }).then(response => response.json())
            .then(result => {
                localStorage.setItem("token", result.token);
                if (localStorage.getItem("token")) {
                    props.loginStatusUpdate("successful");
                } else {
                    props.loginStatusUpdate("unsuccessful");
                }
            })
         
    }

    return (
        <div className="log-in-form-div animated bounceInLeft delay-1s">
            <form 
                name="user" 
                className={`log-in-form ${props.loginStatus === "unsuccessful" ? "animated shake" : ""}`} 
                onSubmit={handleSubmit} 
                autoComplete="off"
            >
                <input 
                    id={props.loginStatus === null ? "login-username-input" : ""  }
                    className={props.loginStatus === "unsuccessful" ? "input-invalid" : "login-input" }
                    type="text" 
                    name="username" 
                    value={props.usernameState} 
                    onChange={props.handleChange} 
                    placeholder="Username"
                />
                <input 
                    id={props.loginStatus === null ? "login-password-input" : ""  }
                    className={props.loginStatus === "unsuccessful" ? "input-invalid" : "login-input"}
                    type="password" 
                    name="password" 
                    value={props.passwordState} 
                    onChange={props.handleChange}
                    placeholder="Password"
                />
                <input type="submit" value="Log In"/>
            </form>
        </div>
    )
    
}