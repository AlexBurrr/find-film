import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../scss/actorDetails.scss'


const actorImg = `https://image.tmdb.org/t/p/w500`




const ActorDetails = () => {
    const [actor, setActor] = useState('')
    const actorDetails = `https://api.themoviedb.org/3/person/${localStorage.getItem('actor id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
    const actorImg = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    useEffect(() => {
        axios.get(actorDetails)
            .then(res => {
                setActor(res.data);
            })
    }, [])
    console.log(actor);

    return (
        <div className='actorContainer'>
            <div className="actor">
                <div className="actor-image-container">
                    <img src={actorImg} alt="" className='actor-image' />
                </div>
                <div className="actor-details">
                    <div className="actor-name">{actor.name}</div>
                    <div className="actor-bio">{actor.biography}</div>
                    <div className="actor-birthday">Born: {actor.birthday}</div>
                    <div className="actor-pob">Place of Birth: {actor.place_of_birth}</div>
                </div>

            </div>

        </div>
    )
}

export default ActorDetails
