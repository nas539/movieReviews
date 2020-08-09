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
            message: "Edit/delete movie",
            data: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDeleteMovieSubmit = this.handleDeleteMovieSubmit.bind(this);
        this.handleEditMovieSubmit = this.handleEditMovieSubmit.bind(this);
    }

    handleEditMovieSubmit(event) {
        event.preventDefault();
        this.setState({
            message: "Updating the movie"
        })
        axios.put(`http://127.0.0.1:5000/movie/update/${id}`)
        .then(response => {
            console.log(response);
            this.setState({
                message: "he movie has been successfully updated!"
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
                message: "The update has failed."
            })
        })
    }

    handleDeleteMovieSubmit() {
        this.setState({
            message: "Deleting movie"
        })
        axios.delete(`http://127.0.0.1:5000/movie/delete/${id}`)
        .then(response => {
            console.log(response);
            this.setState({
                message: "The movie has been successfully deleted!"
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
                message: "The deletion has failed."
            })
        })
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    componentDidMount() {
        // TODO: add state to error message to show when getting movies
        axios.get('')
        .then(response => {
            console.log(response);
        })
        .then(data => {
            this.setState({
                data: data
            })
            if (this.state.data.length === 0) {
                this.setState({
                    message: "There are no movies in your list"
                })
            } else {
                this.setState({
                    message: "Movie List"
                })
            }
        })
        .catch(error => {
            console.log(error);
            this.setState({
                message: "There was a problem retreiving movies"
            })
        })
    }

    renderMovies() {
        return (
            <div>
                {this.state.data.map(item => (
                    <p className="movie" key={item.id}>
                       <Popup classname="popup" modal trigger={<button>{item.title}</button>} position="center center">
                            <div className="modal-movie">
                                <input 
                                    className="modal"
                                    placeholder={item.title}
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                />
                                <input 
                                    className="modal"
                                    placeholder={item.year}
                                    name="year"
                                    value={this.state.year}
                                    onChange={this.handleInputChange}
                                />
                                <input 
                                    className="modal"
                                    placeholder={item.rated}
                                    name="rated"
                                    value={this.state.rated}
                                    onChange={this.handleInputChange}
                                />
                                <input 
                                    className="modal"
                                    placeholder={item.director}
                                    name="director"
                                    value={this.state.director}
                                    onChange={this.handleInputChange}
                                />
                                <input 
                                    className="modal"
                                    placeholder={item.genre}
                                    name="genre"
                                    value={this.state.genre}
                                    onChange={this.handleInputChange}
                                />
                                <input 
                                    className="modal"
                                    placeholder={item.released_on}
                                    name="releasedOn"
                                    value={this.state.releasedOn}
                                    onChange={this.handleInputChange}
                                />
                                <textarea 
                                    className="modal"
                                    placeholder={item.plot}
                                    name="plot"
                                    value={this.state.plot}
                                    onChange={this.handleInputChange}
                                />
                                <div className="edit-section">
                                    <p id="edit-message">{this.state.message}</p>
                                    <button type="submit" onClick={this.handleEditMovieSubmit}>Edit Movie</button>
                                    <button type="submit" onClick={this.handleDeleteMovieSubmit}>Delete Movie</button>
                                </div>
                            </div>
                       </Popup>
                    </p>   
                ))}
            </div>
        ) 
    }


    render() {
        return (
            <div className="edit-movie-body-wrapper">
                {this.renderMovies()}     
            </div>
        )
    }
}
