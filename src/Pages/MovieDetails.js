import React, { useState, useEffect } from 'react'
import axios from 'axios'



const MovieDetails = () => {
    const [details, setDetails] = useState()

    const movieDetails = `https://api.themoviedb.org/3/movie/${localStorage.getItem('id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`

    useEffect(() => {
        axios.get(movieDetails)
            .then(res => {
                setDetails(res.data.title);
            })
    }, [])


    return (


        <div>
            {details}
        </div>
    )
}

export default MovieDetails
