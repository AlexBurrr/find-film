import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import '../scss/popular.scss'
import Title from './Title'


const Popular = () => {

    const [popular, setPopular] = useState([])


    const popURL = `https://api.themoviedb.org/3/movie/popular?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`

    const imageurl = `https://image.tmdb.org/t/p/w500`

    console.log(imageurl);
    useEffect(() => {
        axios.get(popURL)
            .then(res => {
                setPopular(res.data.results);
            })
    }, [])
    console.log(popular);


    return (
        <div>


            <div className='home-popular-container'>
                <p className='slider-title' >Trending Movies</p>

                <div className="home-card-container">
                    {popular.map((movie, index) => (
                        <div key={index} className='popular-card'>
                            < Card src={imageurl + movie.poster_path} title={movie.title} />

                        </div>
                    ))}

                </div>
            </div>

        </div>

    )
}

export default Popular
