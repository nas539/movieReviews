import React, { Component } from 'react';
import Cookies from 'js-cookie';

export default class Login extends Component {
    constructor(props){
        super(props);

        if (Cookies.get("username")) {
            window.location.href=("/#/movie/edit")
          }

        this.state = {
            username: "",
            password: "",
            message: " Go ahead, login!"
        }

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        Cookies.get("username")
        this.setState({
            message: "logging in.."
        })
        if (this.state.username === "" || this.state.password === "") {
            this.setState({ message: "All feilds required!" })
        }
        else {
        }
    }

    render() {
        return (
            <div className="login-body-wrapper">
                <div className="login-sections-wrapper">
                    <div className="login-section">
                        <p>Username: </p>
                        <input 
                            type="text" 
                            name="username" 
                            username={this.state.username}
                            placeholder="Username"
                            onChange={this.handleLoginChange}
                        />
                    </div>
                    <div className="login-section"> 
                        <p>Password: </p>
                        <input 
                            type="password" 
                            name="password" 
                            password={this.state.password} 
                            placeholder="Password"
                            onChange={this.handleLoginChange}
                        />
                    </div>
                    <div className="login-section">
                        <button type="submit" onClick={this.handleLoginSubmit}>Login</button>    
                        <p id="error">{this.state.message}</p>
                    </div>
                </div>    
            </div>
        )
    }
}
