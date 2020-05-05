import React, { Component } from 'react'

export default class CreateUserForm extends Component {
    state = {
        username: "",
        password: "",
        createUserStatus: null
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                this.creationStatus(result)
            })
        
            this.setState({
                username: "",
                password: ""
            })

    }

    creationStatus = (userObject) => {
        if (userObject.id) {
            this.successfulCreation()
        } else {
            this.unsuccessfulCreation()
        }
    }

    successfulCreation = () => {
        console.log("User Created")
        this.setState({ createUserStatus: "successful" })
    }

    unsuccessfulCreation = () => {
        console.log("Unsuccessful")
        this.setState({ createUserStatus: "unsuccessful" })

    }

    render() {
        return (
            <div className="log-in-form-div">
                <form name="user" className="create-user-form" onSubmit={this.handleSubmit}>
                    <input 
                        id={this.state.createUserStatus === null ? "create-username-input" : ""  }
                        className={this.state.createUserStatus === "successful" ? "input-valid" : "input-invalid"}
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        placeholder="Username"
                    />
                    <input 
                        id={this.state.createUserStatus === null ? "create-password-input" : ""  }
                        className={this.state.createUserStatus === "successful" ? "input-valid" : "input-invalid"}
                        type="text" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    <input type="submit" value="Create Username"/>
                </form>
            </div>
        )
    }
}