import React, { Component } from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';

export default class EditMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            year: 2019,
            rated: "",
            releasedOn: new Date(),
            genre: "",
            director: "",
            plot: "",
            masseage: "Update movie"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className="edit-movie-body-wrapper">

                
            </div>
        )
    }
}
