import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Calendar from 'react-calendar';
import axios from 'axios';

export default class CreateMovie extends Component {
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
            message: "Create new movie"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateMovieSubmit = this.handleCreateMovieSubmit.bind(this);
    }

    handleCreateMovieSubmit(event) {
        event.preventDefault();
        if ( title === "" || year === "" || rated === "" || releasedOn === "" || genre === "" || director === "" || plot === "") {
            this.setState({
                message: "All fields are required"
            })
        } else {
            axios.get('')
            .then(response => {
                console.log(response)
             })
            .then(data => {
                console.log(data)
                this.setState({
                    message: "The movie has been successfully created!"
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    message: "The update has failed."
                })
            })
        }
    }

    renderCreateNeMovie() {
        <Popup classname="popup" modal trigger={<button>Create New Movie</button>} position="center center">
                            <div className="modal-create-movie">
                                <div className="create-section">
                                    <p>
                                        Name of movie:
                                    </p>
                                    <input
                                        placeholder="Title"
                                        name="title"
                                        title={this.state.title}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="create-section">
                                    <p>
                                        Year:
                                    </p>
                                    <input
                                        placeholder="2019"
                                        name="year"
                                        title={this.state.year}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="create-section">
                                    <p>
                                        Rated:
                                    </p>
                                    <input
                                        placeholder="PG-13"
                                        name="rated"
                                        title={this.state.rated}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="create-section">
                                    <p>
                                        Released On:
                                    </p>
                                    <Calendar
                                        onChange={this.handleInputChange}
                                        value={this.state.releasedOn}
                                    />
                                </div>
                                <div className="create-section">
                                    <p>
                                        Genre:
                                    </p>
                                    <input
                                        placeholder="Action, Adventure, Comedy, Sci-Fi"
                                        name="genre"
                                        title={this.state.genre}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="create-section">
                                    <p>
                                        Director:
                                    </p>
                                    <input
                                        placeholder="James Gunn"
                                        name="director"
                                        title={this.state.director}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="create-section">
                                    <p>
                                        Plot:
                                    </p>
                                    <textarea
                                        placeholder="James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)"
                                        name="plot"
                                        title={this.state.plot}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="create-section">
                                    <p id="create-message">{this.state.message}</p>
                                    <button type="submit" onClick={this.handleCreateMovieSubmit}>Create Movie</button>
                                </div>
                            </div>
                       </Popup>
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="create-movie-body-wrapper">
                {this.renderCreateNeMovie()}                
            </div>
        )
    }
}