import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import '../scss/popular.scss'
import Title from './Title'
import { Link } from 'react-router-dom'


const Popular = () => {
    const [yes, setYes] = useState('')
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

                <div className="home-card-container" >
                    {popular.map((movie, index) => (

                        <div key={index} className='popular-card' onClick={() => localStorage.setItem('id', `${movie.id}`)}>
                            <Link to='/details'>
                                < Card src={imageurl + movie.poster_path} title={movie.title} />
                            </Link>

                        </div>
                    ))}

                </div>
            </div>

        </div >

    )
}

export default Popular
