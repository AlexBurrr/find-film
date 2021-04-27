import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import '../scss/slider.scss'


const upcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1'




const Slider = () => {
    const [backdropPath, setBackdropPath] = useState('')
    const [click, setClick] = useState(0)

    const increase = () => {
        if (click < 19) {
            setClick(click + 1)
        }

    }
    const decrease = () => {
        if (click > 0) {
            setClick(click - 1)
        }

    }


    useEffect(() => {
        axios.get(upcoming)
            .then(res => {
                let i;
                // for (i = 0; i < res.data.results.length; i++) {
                console.log(res.data.results);
                setBackdropPath(res.data.results[click].backdrop_path)
                // }
            }, [])
    })
    let poster = `https://image.tmdb.org/t/p/w500/${backdropPath}`


    // https://image.tmdb.org/t/p/3000/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg

    return (
        <div className='slider-container'>
            <h1 className="upcoming-title"></h1>
            <div className="slider-content">
                <img src={poster} alt='wtf' className='image' />
                <div className="icons">
                    <div className="previous"><GrFormPrevious onClick={decrease} /></div>
                    <div className="next"><GrFormNext onClick={increase} /></div>



                </div>

            </div>

        </div >
    )
}

export default Slider
