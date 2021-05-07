import React, { useState, useEffect } from 'react'
import axios from 'axios'


// const actorImg = `https://image.tmdb.org/t/p/w500`




const ActorDetails = () => {
    const [actor, setActor] = useState('')
    const actorDetails = `https://api.themoviedb.org/3/person/${localStorage.getItem('actor id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`


    useEffect(() => {
        axios.get(actorDetails)
            .then(res => {
                setActor(res.data);
            })
    }, [])


    return (
        <div>
            {actor.name}
        </div>
    )
}

export default ActorDetails
