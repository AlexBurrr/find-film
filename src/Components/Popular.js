import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Popular = () => {


    const popURL = `https://api.themoviedb.org/3/movie/popular?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`


    useEffect(() => {
        axios.get(popURL)
            .then(res => {
                console.log(res);
            })
    })

    return (
        <div>
            pop
        </div>
    )
}

export default Popular
