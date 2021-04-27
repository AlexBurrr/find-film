import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import '../scss/slider.scss'


const upcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1'




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
                    'overview': res.data.results[click].overview


                });

            })
    }, [click])
    console.log(movieDetails);


    let poster = `https://image.tmdb.org/t/p/w500/${backdropPath}`

    // https://image.tmdb.org/t/p/3000/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg

    return (
        <div className='slider-container'>
            <div className="slider-content">
                <h1 className="title">{movieDetails.title}</h1>
                <img src={poster} alt='wtf' className='image' />
                <p className='movie-overview'>{movieDetails.overview}</p>
                <div className="icons">
                    <div className="previous"><GrFormPrevious onClick={decrease} /></div>
                    <div className="next"><GrFormNext onClick={increase} /></div>
                </div>

            </div>

        </div >
    )
}

export default Slider
