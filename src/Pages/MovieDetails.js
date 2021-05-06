import React, { useState, useEffect } from 'react'
import '../scss/moviedetails.scss'
import axios from 'axios'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'



const MovieDetails = () => {
    const [details, setDetails] = useState('')
    const [genre, setGenre] = useState([])
    const [cast, setCast] = useState([])


    const castImg = `https://image.tmdb.org/t/p/w500`
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
                setCast(res.data.cast)
                console.log(cast)

            })
    }, [])
    console.log(details);
    let movieLength = `${Math.floor((details.runtime) / 60)}hr ${(details.runtime % 60)}min`



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

                    <div className='home-popular-container'>
                        <p className='slider-title' >Cast</p>

                        <div className="home-card-container" >
                            {cast.map((cast, index) => (

                                <div key={index} className='popular-card' onClick={() => localStorage.setItem('id', `${cast.id}`)}>
                                    <Link to='/'>
                                        < Card src={castImg + cast.profile_path} title={cast.name} alt={'no picture'} />
                                        <div className="character"> as {cast.character}</div>
                                    </Link>

                                </div>
                            ))}

                        </div>
                    </div>


                </div>

            </div>



        </div>
    )
}

export default MovieDetails
