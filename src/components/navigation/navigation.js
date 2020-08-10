import React, { Component } from 'react';
import { Route, HashRouter, NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

import Home from '../pages/home';
import Movies from '../pages/movies';
import Login from '../pages/login';
import Admin from '../pages/adminPage';


export default class NavigationMenu extends Component {
    constructor(props) {
        super(props);

        Cookies.get("username")
           

        this.state = {
            username: "",
            loggedIn: false
        }

        this.logOut = this.logOut.bind(this);
    }

    UNSAFE_componentWillUpdate() {
        if (Cookies.get("username")) {
            this.setState({
                loggedIn: true
            })
        }
    }

    componentWillMount() {
        if (!Cookies.get("username")) {
            this.setState({
                loggedIn: false
            })
        } else {
            this.setState({
                loggedIn: true
            })
        }
    }

    logOut() {
        console.log("test")
        Cookies.remove("username")
        window.location.href=("/")
        this.setState({
            loggedIn: false
        })
    }

    render() { 
        const loggedOutNav =
            <ul className="navigation-links-wrapper" >
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
             </ul>

        const loggedInNav =
                <ul className="navigation-links-wrapper" >
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                    <li><NavLink to="/movies/admin">Admin</NavLink></li>
                    <li><a onClick={this.logOut}>Log Out</a></li>
                </ul>

        return (  
            <div className="menu-toggle">
                <HashRouter className="nav" >
                    <div> 
                        {!this.state.loggedIn ? loggedOutNav : loggedInNav }
                        <div className="content"> 
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/movies" component={Movies}/>
                            <Route path="/movies/admin" component={Admin}/>  
                        </div>
                    </div>
                </HashRouter>
            </div>
        )
     }
}