import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../scss/hero.scss'


const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`




const Hero = () => {
    const [heroMovie, setHeroMovie] = useState('')

    useEffect(() => {
        axios.get(upcomingURL)
            .then(res => {
                setHeroMovie(res.data.results);
            })
    }, [])

    console.log(heroMovie);






    return (
        <div className='hero-container'>

        </div  >
    )

}
export default Hero
