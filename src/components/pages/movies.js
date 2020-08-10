import React, { Component } from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';


export default class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 0,
            message: "",
            clickableMessage: "",
            data: [],
            ratingMessage: ""
        }

        this.handleSendRating = this.handleSendRating.bind(this);
        this.handleGetRating = this.handleGetRating.bind(this);
    }

   handleSendRating(movie) {
        axios.post(`http://127.0.0.1//rating/add/${movie.id}`)
        .then(response => {
            console.log(response);
            this.setState({
                ratingMessage: "Rating submited!"
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
                ratingMessage: "Unable to submit rating"
            })
        })
   }

    handleGetRating(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/movies/get')
        .then(response => {
            console.log(response);
            this.setState({
                data: response.data
            })
            if (this.state.data.length === 0) {
                this.setState({
                    message: "There are no movies in your list"
                })
            } else {
                this.setState({
                    clickableMessage: "Click the movie title to get details",
                    message: "Movie List"
                })
            }
        })
        .catch(error => {
            console.log(error)
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
                                <p className="modal">{item.title}</p>
                                <p className="modal">Year: {item.year}</p>
                                <p className="modal">Rated: {item.rated}</p>
                                <p className="modal">Director: {item.director}</p>
                                <p className="modal">Genre: {item.genre}</p>
                                <p className="modal">Released On: {item.released_on}</p>
                                <p className="modal">Plot: {item.plot}</p>
                                <p className="modal">Rating: {item.rating}</p>
                                <p className="modal">How many Reviews: {item.count}</p>
                                <div className="rate-section">
                                    <p className="rate-this-title">
                                        Rate this movie:
                                    </p>
                                    <input
                                        placeholder="0-5"
                                        name="rating"
                                        onChange={this.handleGetRating}
                                    />
                                    <button type="submit" onClick={this.handleSendRating}>Send Rating</button>
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
            <div className="movie-list-body-wrapper">
                <div className="movies-section">
                        <p id="movie-message">{this.state.message}</p>
                        <p id="clickable-message">{this.state.clickableMessage}</p>
                        {this.renderMovies()}
                </div>
            </div>
        )
    }
}

