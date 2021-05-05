import React, { useState, useEffect } from 'react'
import '../scss/moviedetails.scss'
import axios from 'axios'



const MovieDetails = () => {
    const [details, setDetails] = useState('')
    const [genre, setGenre] = useState([])




    const imageurl = `https://image.tmdb.org/t/p/w500${details.poster_path}`
    const movieDetails = `https://api.themoviedb.org/3/movie/${localStorage.getItem('id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
    const credits = `https://api.themoviedb.org/3/movie/${localStorage.getItem('id')}/credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`

    useEffect(() => {
        axios.get(movieDetails)
            .then(res => {
                setDetails(res.data);
                setGenre(res.data.genres)
            })
    }, [])

    useEffect(() => {
        axios.get(credits)
            .then(res => {
                console.log(res);
            })
    }, [])
    console.log(details);
    let movieLength = `${Math.floor((details.runtime) / 60)}hr ${(details.runtime % 60)}min`

    console.log(genre);

    return (


        <div className='details-container'>
            <div className="content">
                <img src={imageurl} alt="poster" className='movie-poster' />
                <div className="text-content">
                    <div className="movietitle">{details.title}</div>
                    <div className="movie-desc fontSM">{details.overview}</div>
                    <div className="runtime fontSM">Runtime: {movieLength}</div>
                    <div className="release-date fontSM">Released: {details.release_date}</div>
                    <div className="genre fontSM">Genres: {genre.map((x, index) => (
                        <div className='genre-div' key={index}>{` ${x.name},  `} </div>
                    ))}</div>
                    <div className="status fontSM">Status: {details.status}</div>
                </div>

            </div>



        </div>
    )
}

export default MovieDetails
