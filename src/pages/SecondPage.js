import omdbAxios from "../axiosConfig";
import React from 'react';
import RatingList from "../components/RatingList";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import Loader from "../components/Loader";

class SecondPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {mov: {}, loading: false}
    }

    async componentDidMount() {
        // Получаю через imdbId обьект с фильмом
        this.setState({
            loading: true
        })
        try {
            const res = await omdbAxios.get('', {
                params: {
                    plot: 'full',
                    i: this.props.match.params.imdbId
                }
            })
            this.setState({
                mov: res.data,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <Container>
                <div>
                    <Link to={'/'}>На главную</Link>
                    <h1>Фильм: {this.state.mov.Title}</h1>
                    {!this.state.loading ? <div className="movie-page">
                        <img src={this.state.mov.Poster} alt=""/>
                        <div>
                            <p>Актёры: {this.state.mov.Actors}</p>
                            <p>Награды: {this.state.mov.Awards}</p>
                            <RatingList ratings={this.state.mov.Ratings}/>
                            <p>Жанры: {this.state.mov.Genre}</p>
                            <p>Дата выхода: {this.state.mov.Released}</p>
                            <p>Описание: {this.state.mov.Plot}</p>
                        </div>
                    </div> : <Loader />}
                </div>
            </Container>
        )
    }
}

export default SecondPage