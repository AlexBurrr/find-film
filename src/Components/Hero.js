import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../scss/hero.scss'





const Hero = () => {
    const [heroMovie, setHeroMovie] = useState('')
    const [backDrop, setBackDrop] = useState('')
    const [movieID, setMovieID] = useState('')
    const [details, setDetails] = useState({})
    const movieDetails = `https://api.themoviedb.org/3/movie/${movieID}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
    const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`


    useEffect(() => {
        axios.get(upcomingURL)
            .then(res => {

                let randomNumber = `${Math.floor(Math.random() * 20)}`;

                setMovieID(res.data.results[randomNumber].id)
                setHeroMovie(res.data.results[randomNumber])
                setBackDrop(`https://image.tmdb.org/t/p/original/${res.data.results[randomNumber].backdrop_path}`)
            })
    }, [])

    useEffect(() => {
        axios.get(movieDetails)
            .then(res => {
                setDetails(res.data);
            })
    }, [])



    console.log(details);


    return (
        <div className='hero-container'>
            <div className="hero-wrapper">
                <div className="hero-details">
                    <div className="hero-details-wrapper">
                        <div className="title">{heroMovie.title}</div>
                        <div className="misc-details">1hr10min</div>
                        <div className="overview">{heroMovie.overview}</div>
                    </div>

                </div>
                <div className="movie-image">
                    <img className='hero-img' src={backDrop} alt="" />

                </div>

            </div>

        </div  >
    )

}
export default Hero
