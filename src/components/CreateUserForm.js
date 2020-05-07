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
            }).then(this.setState({ createUserStatus: null }))
        
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

    whichFormClass = () => {
        switch(this.state.createUserStatus) {
            case null:
                return "create-user-form";
            case "successful":
                return "create-user-form animated bounce fast";
            case "unsuccessful":
                return "create-user-form animated shake fast";
            default:
                console.log("whichFormClass - something went wrong")
        }
    }

    whichInputClass = () => {
        switch(this.state.createUserStatus) {
            case null:
                return "create-username-input";
            case "successful":
                return "input-valid";
            case "unsuccessful":
                return "input-invalid";
            default:
                console.log("whichFormClass - something went wrong")
        }
    }

    render() {
        return (
            <div className="create-user-form-div animated bounceInRight delay-1s">
                <form 
                    name="user" 
                    className={this.whichFormClass()} 
                    onSubmit={this.handleSubmit} 
                    autoComplete="off"
                    >
                    <input 
                        id={
                            this.state.createUserStatus === null || 
                            this.state.createUserStatus === "successful" ? 
                            "create-username-input" : null  
                        }
                        className={this.whichInputClass()}
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        placeholder="Username"
                    />
                    <input 
                        id={
                            this.state.createUserStatus === null || 
                            this.state.createUserStatus === "successful" ? 
                            "create-password-input" : null  
                        }
                        className={this.whichInputClass()}
                        type="password" 
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