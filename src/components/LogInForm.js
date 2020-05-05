import React, { Component } from 'react'

export default class LogInForm extends Component {
    state = {
        username: "",
        password: "",
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                    username: this.state.username,
                    password: this.state.password
            })
        }).then(response => response.json())
            .then(result => {
                localStorage.setItem("token", result.token);
                if (result.token) {
                    this.props.loginStatusUpdate("successful");
                    
                } else {
                    this.props.loginStatusUpdate("unsuccessful");
                }
            })
        
            this.setState({
                username: "",
                password: ""
            })
         
    }

    render() {
        return (
            <div className="log-in-form-div">
                <form name="user" className="log-in-form" onSubmit={this.handleSubmit}>
                    <input 
                        id={this.props.loginStatus === null ? "login-username-input" : ""  }
                        className={this.props.loginStatus === "unsuccessful" ? "input-invalid" : "login-input" }
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        placeholder="Username"
                    />
                    <input 
                        id={this.props.loginStatus === null ? "login-password-input" : ""  }
                        className={this.props.loginStatus === "unsuccessful" ? "input-invalid" : "login-input"}
                        type="text" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        )
    }
}