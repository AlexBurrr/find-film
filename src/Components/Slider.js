import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom'

import '../scss/slider.scss'


const upcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1'

let iconStyles = { color: '#fff' }


const Slider = () => {
    const [backdropPath, setBackdropPath] = useState('')
    const [click, setClick] = useState(0);
    const [movieDetails, setMovieDetails] = useState([]);

    const reset = () => {
        if (click === 19) {
            setClick(0)
        }
    }

    const increase = () => {
        if (click < 19) {
            setClick(click + 1)
        }

        if (click === 19) {
            setClick(0)
        }

    }
    const decrease = () => {
        if (click > 0) {
            setClick(click - 1)
        }
        if (click === 0) {
            setClick(19)
        }

    }




    useEffect(() => {
        axios.get(upcoming)
            .then(res => {

                console.log(res);
                setBackdropPath(res.data.results[click].backdrop_path);

                setMovieDetails({
                    'title': res.data.results[click].title,
                    'overview': res.data.results[click].overview,
                    'movieID': res.data.results[click].id,


                });

            })
    }, [click])
    console.log(movieDetails);


    let poster = `https://image.tmdb.org/t/p/w500/${backdropPath}`

    // https://image.tmdb.org/t/p/3000/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg

    return (
        <div className='slider-container'>
            <div className="slider-content">
                <div className="slider-image">
                    <img src={poster} alt='wtf' className='image' />

                </div>
                <div className="slider-details">
                    <h1 className="title">{movieDetails.title}</h1>
                    <p className='movie-overview'>{movieDetails.overview}</p>

                    <Link className='slider-link' to={{
                        pathname: '/details',
                        state: movieDetails,
                    }}>
                        <button className='button' type='submit' >see more</button>
                    </Link>
                </div>
            </div>

            <div className="icons">
                <div className="previous"><GrFormPrevious onClick={decrease} /></div>
                <div className="next"><GrFormNext style={iconStyles} onClick={increase} /></div>
            </div>



        </div >
    )
}

export default Slider
