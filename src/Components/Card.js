import React from 'react'
import '../scss/card.scss'


const Card = ({ src, title, alt }) => {
    return (
        <div className='card-container'>
            <img src={src} alt={alt} className='card-image' />
            <p className='movie-title'>{title}</p>


        </div>
    )
}

export default Card
