import React from 'react'
import '../scss/card.scss'


const Card = ({ src, title }) => {
    return (
        <div className='card-container'>
            <img src={src} alt="" className='card-image' />
            <p className='movie-title'>{title}</p>


        </div>
    )
}

export default Card
